<script setup lang="ts">
import MediaContent from "../components/Media/MediaContent.vue";
import { AppStorage } from "../config";
</script>

<template>
  <MediaContent :type="AppStorage.MUSIC" />
</template>
