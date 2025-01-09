<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

import { cn } from '@/lib/utils';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <li
        role="presentation"
        aria-hidden="true"
        :class="cn('dark:text-gray-300 [&>svg]:size-3.5', props.class)"
    >
        <slot>
            <span>/</span>
        </slot>
    </li>
</template>
