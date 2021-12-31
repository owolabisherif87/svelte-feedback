<script>
  import { feedbackStore } from "../stores";

  // export let count;
  // export let average;

  $: count = $feedbackStore.length;
  $: average = $feedbackStore.reduce((a, { rating }) => a + rating, 0) / count;
</script>

<div class="feedback-stat">
  <h4>{count} reviews</h4>
  <h4>Ratings average: {average}</h4>
</div>

<style>
  .feedback-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
