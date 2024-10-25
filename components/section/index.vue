<script setup lang="ts">
defineProps<{
  variant: 'page' | 'box'
  light?: boolean
}>()
</script>

<template>
  <section
    v-if="variant === 'page'"
    class="min-h-[800px] w-full bg-transparent"
  >
    <slot />
  </section>

  <section
    v-else
    class="opacity-90 relative drop-shadow-xl w-11/12 min-h-[800px] overflow-hidden rounded-xl bg-primary-2"
  >
    <div
      class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-primary-1"
    >
      <slot />
    </div>
    <div :class="`absolute w-11/12 h-full ${light ? 'bg-primary-4' : ''} blur-[50px] -left-1/2 -top-1/2`" />
  </section>
</template>
