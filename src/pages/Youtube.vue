<script setup lang="ts">
import MediaContent from "../components/Media/MediaContent.vue";
import { AppStorage } from "../config";
import { useRedirect } from "../hooks/useRedirect";

useRedirect();
</script>

<template>
  <MediaContent :type="AppStorage.YOUTUBE" />
</template>
