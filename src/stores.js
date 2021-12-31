import {writable} from "svelte/store"

export const feedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum laboriosam vero nisi excepturi ex vel cupiditate accusamus debitis eius.",
      },
      {
        id: 2,
        rating: 8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum laboriosam vero nisi excepturi ex vel cupiditate accusamus debitis eius.",
      },
      {
        id: 3,
        rating: 9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum laboriosam vero nisi excepturi ex vel cupiditate accusamus debitis eius.",
      },
])