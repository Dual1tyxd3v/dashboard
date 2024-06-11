<script setup lang="ts">
import Modal from "./Modal.vue";

type Props = {
  closeForm: () => void;
};

defineProps<Props>();
</script>

<template>
  <Modal :closeForm="closeForm"></Modal>
</template>
