<script setup>
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    :class="['max-w-[500px] bg-white shadow-2xl rounded-lg p-8', props.class]"
  >
    <slot></slot>
  </div>
</template>
