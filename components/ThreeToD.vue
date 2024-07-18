<script setup lang="ts"></script>

<template>
  <TresCanvas clear-color="#52412e">
    <TresPerspectiveCamera :position="[6, 1.5, -0.2]" :look-at="[0, 1.5, 0]" />
    <OrbitControls />
    <TresAmbientLight :intensity="1" />
    <Suspense>
      <SwordTwo />
    </Suspense>
    <Suspense>
      <SwordSeven />
    </Suspense>
  </TresCanvas>
</template>
