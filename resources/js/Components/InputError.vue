<script setup lang="ts">
defineProps<{
    message?: string;
}>();
</script>

<template>
    <span
        role="alert"
        v-if="message"
        class="ml-2 mt-2 inline-block text-xs font-medium text-red-500"
    >
        {{ message }}
    </span>
</template>
