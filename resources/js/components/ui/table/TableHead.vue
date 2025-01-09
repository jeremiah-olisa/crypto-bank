<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
    <th
        :class="
            cn(
                'px-4 pb-3 text-left align-middle font-medium xl:px-5 rtl:text-right [&:has([role=checkbox])]:pr-0 [&:last-child]:text-center',
                props.class,
            )
        "
    >
        <slot />
    </th>
</template>
