<script setup lang="ts">
const gitHubStore = useGithubStore()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-2">
    <MemberCard
      v-for="(member, index) in gitHubStore.sfenxTeam"
      :key="index"
      :member="member"
    />
  </div>
  <ChangeTheme class="fixed bottom-0 right-0 m-2" />
</template>
