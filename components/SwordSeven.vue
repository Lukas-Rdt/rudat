<script setup lang="ts">
import { MeshStandardMaterial } from "three";

const { scene: model, nodes } = await useGLTF("/sword7/scene.gltf");

const swordSevenTexture = await useTexture({
  map: "/sword7/textures/lambert1_baseColor.png",
  roughnessMap: "/sword7/textures/lambert1_metallicRoughness.png",
  normalMap: "/Sword7/textures/lambert1_normal.png",
});

swordSevenTexture.map.flipY = false;
const swordSevenMaterial = new MeshStandardMaterial({
  map: swordSevenTexture.map,
  roughnessMap: swordSevenTexture.roughnessMap,
  normalMap: swordSevenTexture.normalMap,
});
nodes.polySurface3_lambert1_0.material = swordSevenMaterial;

console.log(nodes);
</script>

<template>
  <primitive
    :object="nodes.polySurface3_lambert1_0"
    :scale="[0.1, 0.095, 0.1]"
    :rotation="[0, Math.PI / 2, Math.PI / 4]"
    :position="[0, -1.8, -2]" />
</template>
