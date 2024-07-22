<template>
  <div class="flex flex-col p-10">
    <Title>Legal Information</Title>
    <h1 class="text-5xl mb-10">{{ $t("legalTitle") }}</h1>
    <h2 class="text-3xl mb-2">{{ $t("tmgNote") }}</h2>
    <h3 class="text-2xl mt-6 mb-2">{{ $t("representedBy") }}</h3>
    <p class="text-xl mb-2">Lukas Rudat</p>
    <h3 class="text-2xl mt-6 mb-2">{{ $t("address") }}</h3>
    <p class="text-xl mb-2">Seestraße 248</p>
    <p class="text-xl mb-2">25469 Halstenbek</p>
    <p class="text-xl mb-2">{{ $t("country") }}</p>
    <h3 class="text-2xl mt-6 mb-2">{{ $t("contact") }}:</h3>
    <p class="text-xl mb-2">+4915225842620</p>
    <p class="text-xl mb-2">rudatlukas@gmail.com</p>
  </div>
</template>
