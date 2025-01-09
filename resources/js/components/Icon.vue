<script setup lang="ts">
import * as icons from 'lucide-vue-next';
import { computed } from 'vue';

// ==============================================================
type KeyOfIcons = keyof typeof icons;
interface IconProps {
    name: string;
    size?: number;
    color?: string;
    strokeWidth?: number;
    defaultClass?: string;
}
// ==============================================================

const props = defineProps<IconProps>();

const icon = computed(() => {
    return icons[props.name as KeyOfIcons] as icons.LucideProps;
});
</script>

<template>
    <component
        :is="icon"
        :size="size"
        :color="color"
        :stroke-width="strokeWidth"
        :default-class="defaultClass"
    />
</template>
