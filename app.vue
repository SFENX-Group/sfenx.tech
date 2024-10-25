<script setup lang="ts">
const gitHubStore = useGithubStore()

onMounted(async () => {
  await gitHubStore.fetchSfenxTeam()
})
</script>

<template>
  <NuxtLayout name="default" class="chakra-light cursor">
    <SectionHome />
    <SectionProjects />
    <SectionTeam />
    <SectionContact />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
.chakra-light {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.chakra-regular {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.chakra-medium {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.chakra-semibold {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.chakra-bold {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.chakra-light-italic {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.chakra-regular-italic {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.chakra-medium-italic {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.chakra-semibold-italic {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 600;
  font-style: italic;
}

.chakra-bold-italic {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-style: italic;
}
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
