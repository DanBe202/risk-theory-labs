<script setup lang="ts">
const model = defineModel<number>();

</script>

<template>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Rain probability (pls use values {0 - 1})</span>
    </div>
    <input
      v-model="model"
      type="text"
      placeholder="Type here"
      class="input input-bordered w-full max-w-xs" />
  </label>
</template>

<style scoped>

</style>