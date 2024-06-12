<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { SEARCH_URL } from "../config";
import { useConfigStore } from "../store";

const search = ref("");
const input = ref(null);
const store = useConfigStore();

const getHoverColor = computed(() => store.Colors.active);

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
  <form @submit="submitHandler">
    <input
      ref="input"
      class="input w-full rounded-xl border-2 p-3 font-roboto outline-none"
      type="text"
      :style="`
        background-color: ${store.Colors.inputBg}; 
        border-color: ${store.Colors.inputBorder};
        color: ${store.Colors.main}`"
      placeholder="Search..."
      v-model="search"
    />
  </form>
</template>

<style scoped>
.input:focus {
  border-color: v-bind(getHoverColor) !important;
}
</style>
