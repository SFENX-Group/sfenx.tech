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
  pb-8

  emeraldCursor
  "
  >
    <AppHeader />
    <slot />
  </div>
</template>

<style>
.emeraldCursor {
  cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 24 24"><path fill="%2311D191" stroke="%23000000" stroke-width="1" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path></svg>') 16 16, pointer;
}
</style>
