<script setup lang="ts">
import Currency from "../components/Currency.vue";
import SearchBar from "../components/SearchBar.vue";
import Weather from "../components/Weather.vue";
import Notes from "../components/Notes.vue";
</script>

<template>
  <div class="flex flex-grow flex-col gap-4">
    <SearchBar />
    <div class="gap-6 md:flex">
      <Weather />
      <Currency />
    </div>
    <Notes />
  </div>
</template>
