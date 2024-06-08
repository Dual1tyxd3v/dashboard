<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import Weather from "../components/Weather.vue";
</script>

<template>
  <SearchBar />
  <div class="md:flex">
    <Weather />
  </div>
</template>
