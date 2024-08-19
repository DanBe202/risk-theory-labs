<script setup lang="ts">
import { RecommendationCalculator } from '../objects/recommendation.calculator.ts';

interface Props {
  recommendation: RecommendationCalculator;
  rainProbability: number;
}

defineProps<Props>();
</script>

<template>
  <tr>
    <th>{{ recommendation.location }}</th>
    <td>{{ recommendation.rainRating }}</td>
    <td>{{ recommendation.sunnyRating }}</td>
    <td>{{ recommendation.calculateRecommendation(rainProbability) }}</td>
  </tr>
</template>

<style scoped></style>
