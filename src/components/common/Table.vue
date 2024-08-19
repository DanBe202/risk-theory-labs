<script setup lang="ts">
import TableItem from './TableItem.vue';
import recommendationsData from '../interfaces/recommendationData.json';
import { Recommendations } from '../objects/recommendations.ts';

interface Props {
  rainProbability: number;
}

defineProps<Props>();

const recommendations: Recommendations = new Recommendations(recommendationsData);
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
      <tr>
        <th></th>
        <th>Rain</th>
        <th>Sunny</th>
      </tr>
      </thead>
      <tbody>
      <TableItem
        v-for="item in recommendations.recommendations"
        :recommendation="item"
        :rain-probability="rainProbability">
      </TableItem>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
