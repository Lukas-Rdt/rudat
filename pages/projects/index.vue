<script lang="ts">
import Carousel from "~/components/Carousel.vue";
</script>

<template>
  <main class="w-full h-full flex flex-col items-center overflow-auto">
    <Title>Projekte</Title>

    <NuxtLinkLocale
      to="/projects/tnt"
      class="w-2/3 shadow-lg flex flex-col items-center my-10 p-10 bg-l-blue bg-opacity-30 dark:bg-opacity-15 dark:border-d-blue rounded-xl hover:bg-l-red hover:bg-opacity-20 dark:hover:bg-opacity-10 duration-200">
      <div
        class="text-indigo-700 dark:text-l-red text-4xl w-full text-center mb-10">
        Terror Nightmare Towers
      </div>
      <img
        src="/static/images/TNT.png"
        alt="Random Picture"
        class="w-1/3 rounded-md object-contain" />
      <div class="my-10">
        {{ $t("projectsTntDesc") }}
      </div>
      <div>
        <i>{{ $t("projectClick") }}</i>
      </div>
    </NuxtLinkLocale>

    <NuxtLinkLocale
      to="/projects/bprojekt"
      class="w-2/3 shadow-lg flex flex-col items-center my-10 p-10 bg-l-blue bg-opacity-30 dark:bg-opacity-15 dark:border-d-blue rounded-xl hover:bg-l-red hover:bg-opacity-20 dark:hover:bg-opacity-10 duration-200">
      <div
        class="text-indigo-700 dark:text-l-red text-4xl w-full text-center mb-10">
        {{ $t("projectsBProjectTitle") }}
      </div>
      <img
        src="/static/images/BProjekt.png"
        alt="Random Picture"
        class="w-1/3 rounded-md object-contain" />
      <div class="my-10">
        {{ $t("projectsBProjectDesc") }}
      </div>
      <div>
        <i>{{ $t("projectClick") }}</i>
      </div>
    </NuxtLinkLocale>
  </main>
</template>
