<script setup lang="ts">
import { cn } from '@/lib/utils';
import { AccordionContent, type AccordionContentProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    AccordionContentProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <AccordionContent
        v-bind="delegatedProps"
        class="overflow-hidden text-sm font-normal text-muted transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    >
        <div :class="cn('px-4 pb-4', props.class)">
            <slot />
        </div>
    </AccordionContent>
</template>
