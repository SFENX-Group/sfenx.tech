<template>
  <div
    class="opacity-90 relative drop-shadow-xl w-[110%] min-h-[70px] overflow-hidden bg-primary-2"
  >
    <div
      class="absolute flex items-center justify-center text-white z-[1] opacity-90 inset-0.5 bg-primary-1"
    >
      <slot />
    </div>
    <div class="absolute w-11/12 h-full bg-primary-4 blur-[50px] -left-1/2 -bottom-1/2" />
  </div>
</template>
