<script setup lang="ts">
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { CircleHelp } from 'lucide-vue-next';

defineProps<{
    description?: string;
    size?: number;
    align?: 'start' | 'center' | 'end';
}>();
</script>
<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>
                <CircleHelp :size="size ?? 12" />
            </TooltipTrigger>
            <TooltipContent :align="align" class="max-w-[300px]">
                <p v-if="description">{{ description }}</p>
                <slot />
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
<style scoped></style>
