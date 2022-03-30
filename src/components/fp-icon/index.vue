<template>
  <i :class="`fp-icons-${props.name}`" />
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string;
}>();
</script>
