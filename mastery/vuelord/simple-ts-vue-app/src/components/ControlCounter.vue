<script setup lang="ts">
import { ref } from "vue";

interface ControlCounterProps {
  (event: "add-count", value: number): void;
  (event: "reset-count"): void;
}

const emit = defineEmits<ControlCounterProps>();
</script>

<template>
  <button type="button" @click="emit('add-count', 1)">Add</button>
  <button type="button" @click="emit('reset-count')">Reset</button>
</template>

<style scoped></style>
