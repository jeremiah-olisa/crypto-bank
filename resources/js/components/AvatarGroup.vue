<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// ==============================================================
interface Props {
    images: string[];
    size?: 'sm' | 'xs';
}
// ==============================================================

withDefaults(defineProps<Props>(), { size: 'xs' });
</script>

<template>
    <div
        class="shrink-0 -space-x-1 leading-none *:ring-1 *:ring-white"
        :class="{ '-space-x-2': size === 'sm' }"
    >
        <Avatar v-for="image in images" :size="size">
            <AvatarImage :src="image" alt="Profile Picture" />
            <AvatarFallback>V</AvatarFallback>
        </Avatar>
    </div>
</template>
