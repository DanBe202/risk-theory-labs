<script setup lang="ts">
import Table from '../../components/common/DataTable.vue';
import { MarketsList } from '../../components/labs/market-lab/markets.list.js';
import marketData from '../../components/interfaces/lab2-data/market.data.json';

const markets: MarketsList = new MarketsList(marketData);
const tableData = markets.dataToString;
const tableResults = markets.resultToString;

const dataNames = [
  'location',
  'positiveProbability',
  'positiveIncome',
  'negativeProbability',
  'negativeIncome',
];

const resultNames = [
  'Location',
  'Net present value',
  'Risk rating index',
  'Semi square variation',
  'Negative semi square variation',
  'Variation coefficient',
  'Negative variation coefficient',
];

</script>
<template>
  <Table
    :data="tableData"
    :names="dataNames">
  </Table>
  <Table
    :data="tableResults"
    :names="resultNames">
  </Table>
</template>

<style scoped></style>