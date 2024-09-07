<script setup lang="ts">
import DashboardCard from '../components/dashboard/DashboardCard.vue';
import { ref } from 'vue';

const cards = ref([
  {
    title: 'Location preference',
    description: 'Chose a location based on rain probability',
    link: '/labs/location-recommendation',
  },
  {
    title: 'Market success',
    description: 'Closing a market point based on probability of success',
    link: '/labs/market-success',
  },

]);
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <DashboardCard
      v-for="card in cards"
      :title="card.title"
      :link="card.link"
      :description="card.description"
      :image="card.image"
      :key="card.link"></DashboardCard>
  </div>
</template>

<style scoped></style>
