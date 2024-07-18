<script>
export default {
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
};
</script>

<template>
  <div
    class="font-active-one text-dark dark:text-light h-dvh bg-grad-l-b-r dark:bg-grad-d-b-r flex flex-col justify-evenly items-center p-8 overflow-hidden">
    <div
      class="bg-grad-white dark:bg-grad-black mb-8 w-full text-center rounded-xl shadow-lg flex justify-between text-5xl p-4">
      <div class="flex w-1/2 justify-start">
        <ModeSwitch />
        <LangSwitch />
      </div>
      <div class="flex">
        <NuxtLinkLocale
          v-if="!isHomePage"
          to="/"
          class="mx-5 dark:hover:text-l-blue hover:text-[#5F76AC] duration-200"
          >{{ $t("indexLink") }}</NuxtLinkLocale
        >
        <NuxtLinkLocale
          to="/projects"
          class="mx-5 dark:hover:text-l-blue hover:text-[#5F76AC] duration-200"
          >{{ $t("projectsLink") }}</NuxtLinkLocale
        >
      </div>
    </div>
    <div
      class="size-full rounded-xl bg-white dark:bg-dark bg-opacity-30 dark:bg-opacity-30 shadow-lg overflow-auto font-dm-sans">
      <NuxtPage />
    </div>
  </div>
</template>
