<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
    <div
        :class="
            cn(
                'rounded-xl border border-[#F1F6F9] bg-card text-card-foreground shadow-sm dark:border-gray-700/30',
                props.class,
            )
        "
    >
        <slot />
    </div>
</template>
