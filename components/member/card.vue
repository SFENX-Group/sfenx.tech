<script setup lang="ts">
import type { GitHubUser } from '~/types'

defineProps<{
  member: GitHubUser | undefined
}>()
</script>

<template>
  <div class="bg-emerald-400/50 w-[200px]">
    <NuxtImg :src="member?.avatar_url" />
    {{ member?.name }}
  </div>
</template>
