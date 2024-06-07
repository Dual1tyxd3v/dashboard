<script setup lang="ts">
import { fastLinks } from "../config";
</script>

<template>
  <ul class="flex items-center justify-evenly rounded-2xl bg-bg-block">
    <li
      class="py-2"
      v-for="({ name, icon, url }, i) in fastLinks"
      :key="`link_${name}_${i}`"
    >
      <a
        :title="name"
        :href="url"
        class="flex h-7 w-7 items-center justify-center rounded-lg bg-nav-icon p-2 text-white opacity-75 transition hover:scale-110 hover:opacity-100"
      >
        <span v-if="!icon">{{ name[0] }}</span>
        <v-icon v-if="icon" :name="icon" scale="1.3" />
      </a>
    </li>
  </ul>
</template>
