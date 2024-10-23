<template>
  <div
    class="fixed top-0 left-0
    flex flex-col justify-between items-center
    w-full h-full overflow-hidden
    dark:bg-[#0b0e11] bg-gray-100
    "
  >
    <div class="fixed top-0 -left-[25%] z-0 w-full h-full flex justify-center items-center">
      <Cube class="scale-[2] opacity-50" />
    </div>
    <!-- <Navbar /> -->
    <div class="flex w-full h-full flex z-10">
      <NuxtPage />
    </div>
  </div>
</template>
