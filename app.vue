<script setup lang="ts">
const gitHubStore = useGithubStore()

onMounted(async () => {
  await gitHubStore.fetchSfenxTeam()
})
</script>

<template>
  <NuxtLayout name="default">
    <SectionHome />
    <SectionTeam />
  </NuxtLayout>
</template>

<style>
.bg-primary-1 {
  background-color: #1C1E24;
}
.bg-primary-2 {
  background-color: #005137;
}
.bg-primary-3 {
  background-color: #359F7C;
}
.bg-primary-4 {
  background-color: #11D191;
}
.bg-primary-5 {
  background-color: #F5F5F5;
}
</style>
