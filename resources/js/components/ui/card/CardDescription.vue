<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
    <p :class="cn('text-[12px] font-medium leading-5 text-muted', props.class)">
        <slot />
    </p>
</template>
