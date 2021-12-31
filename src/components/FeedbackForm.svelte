<script>
  // import { createEventDispatcher } from "svelte";
  import { feedbackStore } from "../stores";
  import Button from "./Button.svelte";
  import Card from "./Card.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  // const dispatcher = createEventDispatcher();

  let text = "";
  let btnDisabled = true;
  let min = 10;
  let message;
  let rating = 10;

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters.`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleSelect = (e) => (rating = e.detail);

  const handleSubmit = () => {
    if (text.trim().length > min) {
      const newFeedback = {
        id: Math.ceil(Math.random() * 9999) + 10,
        rating: +rating,
        text,
      };

      // dispatcher("add-feedback", newFeedback);

      feedbackStore.update(
        (currentFeedback) =>
          (currentFeedback = [newFeedback, ...currentFeedback])
      );

      text = "";
      btnDisabled = true;
    }
  };
</script>

<Card>
  <header><h2>How would you rate your service with us?</h2></header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input
        type="text"
        bind:value={text}
        on:input={handleInput}
        placeholder="What keep's you coming back?"
      />
      <Button type="submit" disabled={btnDisabled}>SEND</Button>
    </div>

    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }

  .input-group {
    display: flex;
    padding: 5px;
    border: 1px solid #333;
    border-radius: 5px;
  }

  input[type="text"] {
    flex: 1;
    margin-right: 5px;
    border: 0;
    font-size: 15px;
  }

  input:focus {
    outline: none;
  }
</style>
