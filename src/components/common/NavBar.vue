<script setup lang="ts">
import AppLink from './AppLink.vue';
</script>

<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <AppLink
        class="flex-1 px-2 mx-2 text-xl"
        to="/">
        Risk theory
      </AppLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-10">
        <li>
          <details>
            <summary class="text-base w-24">Info</summary>
            <ul class="bg-base-200 rounded-t-none p-2 w-32">
              <li><a>Contact Us</a></li>
              <li><a>About Us</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
