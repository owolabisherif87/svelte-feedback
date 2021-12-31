<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";

  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStat from "./components/FeedbackStat.svelte";

  let feedbacks = [];

  // const deleteFeedback = (e) => {
  //   const id = e.detail;

  //   feedbacks = feedbacks.filter((item) => item.id != id);
  // };

  // const addFeedback = (e) => {
  //   feedbacks = [e.detail, ...feedbacks];
  // };
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStat />
  <!-- <FeedbackStat {count} {average} /> -->
  <FeedbackList />
  <!-- <FeedbackList on:delete-feedback={deleteFeedback} /> -->
</main>
