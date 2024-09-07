<script setup lang="ts">
import { watch } from 'vue';

const model = defineModel<number>();

watch(model, () => {
  if (model.value! < 0) {
    model.value = 0;
  }
  if (model.value! > 1) {
    model.value = 1;
  }
});

</script>

<template>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">Rain probability (0 - 1)</span>
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