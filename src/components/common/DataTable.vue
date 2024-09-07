<script setup lang="ts">
import TableItem from './TableItem.vue';

interface Props {
  data: [];
  names: [];
}

defineProps<Props>();

</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
      <tr>
        <th v-for="name in names">
          {{ name }}
        </th>
      </tr>
      </thead>
      <tbody>
      <TableItem
        v-for="item in data"
        :itemData="item">
      </TableItem>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
