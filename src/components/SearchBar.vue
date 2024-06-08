<script setup lang="ts">
import { onMounted, ref } from "vue";
import { SEARCH_URL } from "../config";

const search = ref("");
const input = ref(null);

onMounted(() => {
  if (!input.value) return;

  (input.value as HTMLInputElement).focus();
});

function submitHandler(e: Event) {
  e.preventDefault();
  if (!search.value) return;

  window.location.href = `${SEARCH_URL}${search.value}`;
}
</script>

<template>
  <form class="mb-4" @submit="submitHandler">
    <input
      ref="input"
      class="bg-input-bg border-input-border focus:border-input-border--active w-full rounded-xl border-2 p-3 font-roboto text-white outline-none"
      type="text"
      placeholder="Search..."
      v-model="search"
    />
  </form>
</template>
