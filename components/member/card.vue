<script setup lang="ts">
import type { GitHubUser } from '~/types'

defineProps<{
  member: GitHubUser | undefined
}>()
</script>

<template>
  <div class="flex gap-2">
    <div class="dark:text-gray-950 text-white p-2 rounded">
      <NuxtImg :src="member?.avatar_url" class="w-12 rounded-full" />
    </div>
    <!-- <div class="w-64 dark:bg-white dark:text-gray-950 bg-gray-950 text-white">
      {{ member?.name }}
    </div> -->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat&display=swap');

.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
