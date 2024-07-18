<template>
  <div class="min-w-[150px] w-full h-full relative overflow-hidden">
    <div
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      class="flex transition-transform duration-500">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="w-full h-full flex-shrink-0 overflow-hidden">
        <img
          :src="item"
          alt="carousel image"
          class="self-center w-full h-full object-cover" />
      </div>
    </div>
    <div
      class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(item, index) in items"
        :key="index"
        :class="{
          'w-3 h-3 rounded-full cursor-pointer': true,
          'bg-gray-500': currentIndex !== index,
          'bg-l-red': currentIndex === index,
        }"
        @click="goTo(index)"></span>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: {
    variant: {
      type: [Number, String] as PropType<number | string>,
      required: true,
    },
  },

  setup(props) {
    const itemsVariants: Record<string, string[]> = {
      variant1: [
        "/images/players/army/SoldierBLUE.png",
        "/images/players/army/SoldierRED.png",
        "/images/players/army/SoldierGREEN.png",
        "/images/players/army/SoldierYELLOW.png",
      ],
      variant2: [
        "/images/players/zombie/ZombieBLUE.png",
        "/images/players/zombie/ZombieRED.png",
        "/images/players/zombie/ZombieGREEN.png",
        "/images/players/zombie/ZombieYELLOW.png",
      ],
      variant3: [
        "/images/tiles/army/Level1.png",
        "/images/tiles/army/Level2.png",
        "/images/tiles/army/Level3.png",
        "/images/tiles/army/Level4.png",
        "/images/tiles/army/Level5.png",
        "/images/tiles/army/Level6.png",
        "/images/tiles/army/wasteTile.png",
      ],
      variant4: [
        "/images/tiles/zombie/Level1Zombie.png",
        "/images/tiles/zombie/Level2Zombie.png",
        "/images/tiles/zombie/Level3Zombie.png",
        "/images/tiles/zombie/Level4Zombie.png",
        "/images/tiles/zombie/Level5Zombie.png",
        "/images/tiles/zombie/Level6Zombie.png",
        "/images/tiles/zombie/mudTile.png",
      ],
      variant5: [
        "/images/godcards/CardCaptain.png",
        "/images/godcards/CardWalker.png",
        "/images/godcards/CardMajor.png",
        "/images/godcards/CardAbomination.png",
        "/images/godcards/CardGeneral.png",
        "/images/godcards/CardOgre.png",
        "/images/godcards/CardColonel.png",
        "/images/godcards/CardSavage.png",
      ],
      variant6: [
        "https://picsum.photos/600/800?random=1",
        "https://picsum.photos/600/800?random=2",
        "https://picsum.photos/600/800?random=3",
        "https://picsum.photos/600/800?random=4",
        "https://picsum.photos/600/800?random=5",
        "https://picsum.photos/600/800?random=6",
      ],
    };

    const items = itemsVariants[props.variant] || [];

    const currentIndex = ref(0);

    const goTo = (index: number) => {
      if (index < 0 || index >= items.length || index === currentIndex.value)
        return;

      const diff = Math.abs(currentIndex.value - index);
      const duration = diff > 1 ? 500 : 300;
      currentIndex.value = index;

      setTimeout(() => {
        currentIndex.value = index;
      }, duration);
    };

    onMounted(() => {
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % items.length;
      }, 3000);
    });

    return {
      items,
      currentIndex,
      goTo,
    };
  },
});
</script>

<style scoped>
.object-cover {
  object-fit: scale-down;
  object-position: center;
}
</style>
