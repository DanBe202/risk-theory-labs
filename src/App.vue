<script setup lang="ts">
import NavBar from './components/common/NavBar.vue';
</script>

<template>
  <div class="flex flex-col gap-6">
    <NavBar></NavBar>
    <div class="container mx-auto py-8 px-4">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
