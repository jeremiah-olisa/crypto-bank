<script setup lang="ts">
import { cn } from '@/lib/utils';
import {
    MenubarTrigger,
    type MenubarTriggerProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    MenubarTriggerProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <MenubarTrigger
        v-bind="forwardedProps"
        :class="
            cn(
                'flex cursor-pointer items-center rounded-lg px-2 py-1 text-xs font-medium outline-none hover:bg-primary hover:text-white data-[state=open]:bg-primary data-[state=open]:text-white',
                props.class,
            )
        "
    >
        <slot />
    </MenubarTrigger>
</template>
