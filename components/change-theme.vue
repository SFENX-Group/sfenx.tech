<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed<boolean | undefined>(() => {
  if (colorMode.value === 'dark')
    return true
  if (colorMode.value === 'light')
    return false
  return undefined
})
</script>

<template>
  <UButton
    v-if="isDark !== undefined"
    :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" variant="ghost"
    @click="colorMode.value = isDark ? 'light' : 'dark'"
  />
</template>
