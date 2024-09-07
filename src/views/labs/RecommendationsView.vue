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

</script>

<template>
  <Table
    :data="tableData">
  </Table>
  <TextInput
    v-model="rainProbability">
  </TextInput>
</template>

<style scoped></style>
