<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';
import { type AlertVariants, alertVariants } from '.';

const props = defineProps<{
    class?: HTMLAttributes['class'];
    variant?: AlertVariants['variant'];
    color?: AlertVariants['color'];
}>();
</script>

<template>
    <div
        :class="cn(alertVariants({ variant, color }), props.class)"
        role="alert"
    >
        <slot />
    </div>
</template>
