<template>
  <div
    class="
    --Scrollbar
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-[#11d191]

  --Contianer
  fixed top-o left-0 w-full h-full
  flex flex-col items-center
  gap-16
  overflow-y-auto overflow-x-hidden
  bg-primary-1
  pb-8
  "
  >
    <AppHeader />
    <slot />
  </div>
</template>
