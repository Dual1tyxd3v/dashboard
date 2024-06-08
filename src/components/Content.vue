<script setup lang="ts">
import Header from "./Header.vue";
</script>

<template>
  <div class="flex-grow overflow-auto flex flex-col">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
