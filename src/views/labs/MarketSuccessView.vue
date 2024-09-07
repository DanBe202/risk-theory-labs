<script>
import { MarketsList } from '../../components/labs/market-lab/markets.list.js';
import marketData from '../../components/interfaces/lab2-data/market.data.json'

const markets: MarketsList = new MarketsList(marketData);
const tableData = markets.dataToString;
const tableResults = markets.resultToString;

</script>
<template>
  <Table
    :data="tableData">
  </Table>
</template>