<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <thead
        :class="
            cn('text-muted [&_tr]:border-b [&_tr]:border-border', props.class)
        "
    >
        <slot></slot>
    </thead>
</template>
