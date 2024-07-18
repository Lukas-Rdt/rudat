<script setup lang="ts">
import useTheme from "../composables/useTheme";

const { enabled, toggleTheme } = useTheme();
</script>

<template>
  <div class="h-full w-[48px] rounded-full overflow-hidden font-dm-sans">
    <div
      @click="toggleTheme"
      :class="
        enabled
          ? 'bg-gradient-to-br from-blue-950 to-slate-950'
          : 'bg-gradient-to-br from-yellow-400 to-yellow-600'
      "
      class="size-full flex justify-center items-center hover:cursor-pointer text-center text-[70%]"
      style="user-select: none">
      <span
        v-if="enabled"
        class="size-full flex justify-end pr-1 items-center text-right"
        >&#x1F31B;</span
      >
      <span
        v-else
        class="text-center size-full flex justify-center items-center"
        >&#x1F31E;</span
      >
    </div>
  </div>
</template>
