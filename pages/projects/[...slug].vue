<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();
console.log(route.path);

/*
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent(locale.value)
    .where({ _path: `/${locale.value}${route.path}` })
    .findOne()
);
*/
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
</script>

<template>
  <main class="h-full overflow-hidden rounded-md">
    <Title>Projekt: {{ data.title || "Loading..." }}</Title>
    <div class="size-full overflow-auto">
      <div>
        <ContentRenderer :value="data" />
      </div>
      <header class="ml-2 mb-2">
        <p class="text-sm">
          <i>{{ data.title }}</i
          >, <i>{{ data.released }}</i>
        </p>
        <p class="text-sm">
          <i>{{ data.author }}</i>
        </p>
      </header>
      <div class="w-full flex justify-center">
        <Likes :projectName="data.likeCounter" />
      </div>
      <Comments :projectName="data.likeCounter" />
    </div>
  </main>
</template>

<style scoped>
main {
  @apply text-dark dark:text-light shadow-lg flex justify-center;
}
main :deep(h1) {
  @apply text-indigo-700 dark:text-l-red text-4xl w-full text-center my-10;
}

main :deep(.contentContainer) {
  @apply my-10 p-10 shadow-md;
}

main :deep(.imageContainer) {
  @apply w-[250px];
}

main :deep(.textContainerCenter) {
  @apply mx-5;
}

main :deep(.component-container) {
  @apply flex justify-center m-10;
}

main :deep(.tmpContainer) {
  @apply h-[500px];
}
</style>
