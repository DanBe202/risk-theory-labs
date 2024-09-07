<script setup lang="ts">

interface Props {
  itemData: [];
}

defineProps<Props>();
</script>

<template>
  <tr>
    <td v-for="item in itemData">{{ item }}</td>
  </tr>
</template>

<style scoped></style>
