<script setup lang="ts">
import Currency from "../components/Currency.vue";
import SearchBar from "../components/SearchBar.vue";
import Weather from "../components/Weather.vue";
</script>

<template>
  <SearchBar />
  <div class="gap-6 md:flex">
    <Weather />
    <Currency />
  </div>
</template>
