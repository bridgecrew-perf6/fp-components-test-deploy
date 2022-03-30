<template>
  <component
    :is="as"
    :class="headingClass"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  size: string;
  as: string;
}>();

const headingClass = ref("");

switch (props.size) {
  case "1":
    headingClass.value = `text-6xl font-bold`;
    break;
  case "2":
    headingClass.value = `text-5xl font-bold`;
    break;
  case "3":
    headingClass.value = `text-4xl font-bold`;
    break;
  case "4":
    headingClass.value = `text-3xl font-bold`;
    break;
  case "5":
    headingClass.value = `text-2xl font-bold`;
    break;
  case "6":
    headingClass.value = `text-xl font-bold`;
    break;
}
</script>
