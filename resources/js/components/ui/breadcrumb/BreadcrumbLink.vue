<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

interface Props extends PrimitiveProps {
    as?: string;
    class?: HTMLAttributes['class'];
}
const props = withDefaults(defineProps<Props>(), { as: 'a' });
</script>

<template>
    <Primitive
        :as="as"
        :as-child="asChild"
        :class="cn('transition-colors hover:text-foreground', props.class)"
    >
        <slot />
    </Primitive>
</template>
