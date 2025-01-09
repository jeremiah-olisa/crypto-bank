<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
    <table
        :class="cn('w-full caption-bottom text-sm font-medium', props.class)"
    >
        <slot />
    </table>
</template>
