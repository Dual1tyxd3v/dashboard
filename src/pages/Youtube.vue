<script setup lang="ts">
import MediaContent from "../components/MediaContent.vue";
import { LocalStorage } from "../config";
</script>

<template>
  <MediaContent :type="LocalStorage.YOUTUBE" />
</template>
