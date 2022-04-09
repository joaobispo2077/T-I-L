<script setup lang="ts">
import { ref } from "vue";
import ControlCounter from "./ControlCounter.vue";

interface CounterProps {
  alertMessageOnLimit: string;
  limit: number;
}

const props = withDefaults(defineProps<CounterProps>(), {
  alertMessageOnLimit: "You have reached the limit",
});

const count = ref(0);

function addCount(amount: number) {
  if (count.value + amount > props.limit) {
    alert(props.alertMessageOnLimit);
  } else {
    count.value += amount;
  }
}
</script>

<template>
  <p>Count is: {{ count }}</p>
  <ControlCounter
    @add-count="addCount"
    @reset-count="count = 0"
  ></ControlCounter>
</template>

<style scoped></style>
