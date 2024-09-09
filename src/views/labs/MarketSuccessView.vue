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
  'Variation coefficient',
];

</script>
<template>
    <div class="flex flex-col gap-10 items-start">
      <p>
        Collected data
      </p>
      <Table
        :data="tableData"
        :names="dataNames">
      </Table>
      <p>
        Risk results
      </p>
      <Table
        :data="tableResults"
        :names="resultNames">
      </Table>
      <p>
        The least risky store is in {{ markets.leastRiskStore().location }}.
      </p>
    </div>
</template>

<style scoped></style>