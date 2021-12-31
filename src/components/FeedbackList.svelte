<script>
  // import { onMount, onDestroy} from "svelte";

  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  import { feedbackStore } from "../stores";
  // export let feedbacks = [];

  // const unsubscribe = feedbackStore.subscribe((data) => (feedbacks = data));

  // onMount(() => {})

  // onDestroy(() => {
  //   unsubscribe()
  // })
</script>

<main>
  {#each $feedbackStore as feedback (feedback.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <FeedbackItem {feedback} />
      <!-- <FeedbackItem {feedback} on:delete-feedback /> -->
    </div>
  {/each}
</main>
