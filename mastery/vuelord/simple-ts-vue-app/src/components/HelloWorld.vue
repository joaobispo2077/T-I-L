<script setup lang="ts">
import { ref } from "vue";
import Counter from "./Counter.vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>Welcome to vue 3 with typescript</h1>

  <Counter :limit="2" />
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
