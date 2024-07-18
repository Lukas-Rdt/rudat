<script lang="ts"></script>

<template>
  <div>
    <div class="flex flex-row gap-2">
      <SocialShare
        v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
        :key="network"
        :network="network"
        :styled="true"
        :label="false"
        class="p-4 rounded-none text-light" />
    </div>
    <slot />
  </div>
</template>
