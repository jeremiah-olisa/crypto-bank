<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
    <td
        :class="
            cn(
                'px-5 py-3 align-middle [&:has([role=checkbox])]:pr-0 [&:last-child]:text-center',
                props.class,
            )
        "
    >
        <slot />
    </td>
</template>
