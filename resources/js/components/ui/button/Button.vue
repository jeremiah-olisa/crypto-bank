<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-vue-next';
import { Primitive, type PrimitiveProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';
import { type ButtonVariants, buttonVariants } from '.';

interface Props extends PrimitiveProps {
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
    color?: ButtonVariants['color'];
    class?: HTMLAttributes['class'];
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), { as: 'button' });
</script>

<template>
    <Primitive
        :as="as"
        :as-child="asChild"
        :class="cn(buttonVariants({ variant, size, color }), props.class)"
    >
        <template v-if="loading">
            <Loader class="animate-spin" />
        </template>
        <template v-else>
            <slot />
        </template>
    </Primitive>
</template>
