<script setup lang="ts">
defineProps<{
  member: {
    name: string
    img: string
  }
}>()
</script>

<template>
  <div class="w-[400px] flex rounded bg-gray-950">
    <img class="min-h-20 min-w-20 h-20 w-20 rounded-full" :src="member.img">
  </div>
</template>
