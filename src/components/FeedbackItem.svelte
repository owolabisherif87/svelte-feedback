<script>
  import { feedbackStore } from "../stores";

  // import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";

  export let feedback;

  // const dispatcher = createEventDispatcher();

  const handleDelete = (id) => {
    // dispatcher("delete-feedback", id);

    feedbackStore.update((currentFeedback) => currentFeedback.filter((item) => item.id != id));
  };
</script>

<main>
  <Card>
    <div class="num-display">
      {feedback.rating}
    </div>
    <button class="close" on:click={() => handleDelete(feedback.id)}>X</button>
    <p class="text-display">
      {feedback.text}
    </p>
  </Card>
</main>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    border: none;
    background: none;
  }
</style>
