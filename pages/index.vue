<script setup lang="ts">
const members = [
  { name: 'Atlas Yiğit Aydın', img: 'https://avatars.githubusercontent.com/u/137510980?v=4',
  },
  { name: 'Burak Ahmet', img: 'https://avatars.githubusercontent.com/u/79010710?v=4',
  },
  { name: 'Semih Şahin', img: 'https://avatars.githubusercontent.com/u/78278547?v=4',
  },
  { name: 'Murat Bahadır Kayıhan', img: 'https://avatars.githubusercontent.com/u/109182030?v=4',
  },
  { name: 'Tufan Pirihan', img: 'https://avatars.githubusercontent.com/u/95707045?v=4',
  },
  { name: 'Seymen Kalkan', img: 'https://avatars.githubusercontent.com/u/69122856?v=4',
  },
]
</script>

<template>
  <div class="w-full p-8 m-8 flex justify-center items-center">
    <img
      src="../assets/sfenx.png"
      class="min-w-[150px] max-w-[350px] lg:w-2/12 w-2/12
      shadow-[#1d9aa0]"
    >
  </div>
  <div class="w-full h-full flex justify-center items-center gap-4">
    <MemberCard
      v-for="(member, index) in members" :key="index" :member
      class="flex-1"
    />
  </div>
  <ChangeTheme class="fixed bottom-0 right-0 m-2" />
</template>
