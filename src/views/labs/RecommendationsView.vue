<script setup lang="ts">
import { computed, ref } from 'vue';
import Table from '../../components/common/Table.vue';
import TextInput from '../../components/common/TextInput.vue';
import recommendationsData from '../../components/interfaces/lab1-data/recommendation.data.json';
import { RecommendationsList } from '../../components/labs/weather-recommendation-lab/recommendations.list.ts';

const rainProbability = ref<number>(0.6);

const recommendations = computed(() => {
  return new RecommendationsList(recommendationsData, rainProbability.value);
});

const tableData = computed(() => recommendations.value.toString);
const names = [
  'Location',
  'Sunny rating',
  'Rainy rating',
  'Recommendation',
];

</script>

<template>
  <div class="flex flex-col gap-10 items-center">
    <Table
      :data="tableData"
      :names="names">
    </Table>
    <TextInput
      v-model="rainProbability">
    </TextInput>
  </div>
</template>

<style scoped></style>
