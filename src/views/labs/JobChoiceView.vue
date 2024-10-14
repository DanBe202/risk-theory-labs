<script setup lang="ts">

import Table from '../../components/common/DataTable.vue';
import { Job } from '../../components/labs/job-choice-lab/job.choice.ts';
import { Lottery } from '../../components/labs/job-choice-lab/lottery.ts';

const jobs: Job[] = [
  new Job(
    'first',
    new Lottery(
      {
        1000: 0.5,
        3000: 0.5
      })
  ),
  new Job(
    'second',
    new Lottery(
      {
        0: 0,
        2000: 1
      })
  ),
];

const leastRisky = jobs.reduce((accumulator, currentValue) => {
  return accumulator.higherExpectedUtility(currentValue);
}, jobs[0])

const tableData = jobs.map((value) => value.dataToString());
const names = [
  'Name',
  'Risk-1',
  'Profit-1',
  'Risk-2',
  'Profit-2',
  'Expected Utility'
];

console.log(tableData);
</script>

<template>
    <div class="flex flex-col gap-10 items-start">
      <p>
        Collected data
      </p>
      <Table
        :data="tableData"
        :names="names">
      </Table>
    </div>
  <p>
    The least risky job is {{ leastRisky.jobName }}.
  </p>
</template>

<style scoped>

</style>