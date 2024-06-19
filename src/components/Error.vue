<script setup lang="ts">
type Props = {
  error: string;
  reload: () => void;
};
defineProps<Props>();
</script>

<template>
  <div class="flex h-full flex-col justify-center gap-4 text-center">
    <p>Something went wrong<br />{{ error }}</p>
    <Button class="my-0" @click="reload">Try again</Button>
  </div>
</template>
