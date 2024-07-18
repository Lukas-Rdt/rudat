<template>
  <div class="w-500 h-500 relative overflow-hidden">
    <div
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      class="flex transition-transform duration-500">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="w-500 h-500 flex-shrink-0">
        <img
          :src="item"
          alt="carousel image"
          class="w-full h-full object-cover" />
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
  </div>
</template>

<script lang="ts">
// TODO: images as props
export default defineComponent({
  setup() {
    const items = [
      "https://picsum.photos/600/800?random=1",
      "https://picsum.photos/600/800?random=2",
      "https://picsum.photos/600/800?random=3",
      "https://picsum.photos/600/800?random=4",
      "https://picsum.photos/600/800?random=5",
      "https://picsum.photos/600/800?random=6",
    ];

    const currentIndex = ref(0);

    const goTo = (index: number) => {
      // If index is out of bounds or index is the same as currentIndex, do nothing
      if (index < 0 || index >= items.length || index === currentIndex.value)
        return;

      // Simulate swipe animation by changing currentIndex instantly
      const diff = Math.abs(currentIndex.value - index);
      const duration = diff > 1 ? 500 : 300; // Duration depends on the number of images between currentIndex and index
      currentIndex.value = index;

      // Scroll to the selected image after the animation duration
      setTimeout(() => {
        currentIndex.value = index;
      }, duration);
    };

    onMounted(() => {
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % items.length;
      }, 3000); // Change image every 3 seconds
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
.w-500 {
  width: 500px;
}

.h-500 {
  height: 500px;
}
</style>
