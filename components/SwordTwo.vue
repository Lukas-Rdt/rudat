<script setup lang="ts">
import { MeshStandardMaterial } from "three";

const { scene: model, nodes } = await useGLTF("/sword2/scene.gltf");
const swordTwoTexture = await useTexture({
  map: "/sword2/textures/lambert1_baseColor.png",
  roughnessMap: "/sword2/textures/lambert1_metallicRoughness.png",
  normalMap: "/Sword2/textures/lambert1_normal.png",
});

swordTwoTexture.map.flipY = false;
const swordTwoMaterial = new MeshStandardMaterial({
  map: swordTwoTexture.map,
  roughnessMap: swordTwoTexture.roughnessMap,
  normalMap: swordTwoTexture.normalMap,
});
nodes.polySurface4_lambert1_0.material = swordTwoMaterial;
</script>

<template>
  <primitive
    :object="nodes.polySurface4_lambert1_0"
    :scale="[0.1, 0.11, 0.1]"
    :rotation="[0, Math.PI / 2, -(Math.PI / 4)]"
    :position="[0, -1.5, 2]" />
</template>
