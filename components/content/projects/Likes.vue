<template>
  <div
    class="w-[100px] h-[75px] shadow-lg flex flex-col justify-center items-center hover:cursor-pointer hover:bg-green-400 hover:bg-opacity-50 duration-200 my-5"
    @click="incrementLike">
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21 8q.8 0 1.4.6T23 10v2q0 .175-.038.375t-.112.375l-3 7.05q-.225.5-.75.85T18 21h-8q-.825 0-1.412-.587T8 19V8.825q0-.4.163-.762t.437-.638l5.425-5.4q.375-.35.888-.425t.987.175t.688.7t.087.925L15.55 8zM4 21q-.825 0-1.412-.587T2 19v-9q0-.825.588-1.412T4 8t1.413.588T6 10v9q0 .825-.587 1.413T4 21" />
      </svg>
    </button>
    <div>{{ likeCount }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: {
    projectName: {
      type: [Number, String] as PropType<number | string>,
      required: true,
    },
  },

  setup(props) {
    console.log("Project Name:", props);
    const likeCount = ref(0);

    const fetchLikeCount = async () => {
      const response = await fetch("/api/like");
      const projectNameCount = await response.json();
      const project = projectNameCount.find(
        (p: { name: string }) => p.name === props.projectName
      );
      likeCount.value = project ? project.likeCount : 0;
    };

    const incrementLike = async () => {
      const response = await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: props.projectName }),
      });

      if (response.ok) {
        await fetchLikeCount();
      }
    };

    onMounted(() => {
      fetchLikeCount();
    });

    return {
      likeCount,
      incrementLike,
    };
  },
});
</script>
