<script setup lang="ts">
const gitHubStore = useGithubStore()

onMounted(async () => {
  await gitHubStore.fetchSfenxTeam()
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
