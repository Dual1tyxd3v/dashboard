<script setup lang="ts">
import MediaContent from "../components/MediaContent.vue";
import { AppStorage } from "../config";
</script>

<template>
  <MediaContent :type="AppStorage.MUSIC" />
</template>
