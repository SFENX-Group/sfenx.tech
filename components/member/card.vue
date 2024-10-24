<script setup lang="ts">
import type { GitHubUser } from '~/types'

defineProps<{
  member: GitHubUser | undefined
}>()
</script>

<template>
  <div class="flex text-primary-900 dark:text-primary-100 w-[200px] items-center gap-2 m-2 flex justify-center montserrat">
    <NuxtImg :src="member?.avatar_url" class="w-12 rounded-full" />
    <label> {{ member?.name ?? member?.login }} </label>
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
