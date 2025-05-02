<template>
  <div class="mb-4">
    <label v-if="label" :for="id" class="block mb-1 font-medium text-gray-700">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      v-model.trim="inputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'w-full px-4 py-2 border rounded-md focus:outline-none transition',
        error ? 'border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-blue-400',
        disabled ? 'bg-gray-100 cursor-not-allowed' : ''
      ]"
    />

    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  error?: string
  id?: string
  type?: string
  disabled?: boolean
}>(), {
  type: 'text',
  disabled: false
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>

