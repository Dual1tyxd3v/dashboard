<script setup lang="ts">
import { AppRoute } from "../config";
</script>

<template>
  <nav class="rounded-[20px] bg-bg-nav backdrop-blur-[120px] md:w-72">
    <div
      class="bg-divider bg-[length:100%_1px] bg-bottom bg-no-repeat py-2 text-center"
    >
      <router-link class="mx-auto my-2" :to="AppRoute.Main" title="Home"
        ><v-icon name="md-home" scale="3" fill="#fff" animation="pulse" hover
      /></router-link>
    </div>
  </nav>
</template>
