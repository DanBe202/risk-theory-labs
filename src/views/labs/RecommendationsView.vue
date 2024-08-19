<script setup lang="ts">
import Table from '../../components/common/Table.vue';
import TextInput from '../../components/common/TextInput.vue';
import { ref } from 'vue';

const rainProbability = ref<number>(0.5);

</script>

<template>
  <Table :rain-probability="rainProbability"></Table>
  <TextInput
    v-model="rainProbability">
  </TextInput>
</template>

<style scoped></style>
