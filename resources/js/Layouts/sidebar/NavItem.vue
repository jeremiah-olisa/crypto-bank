<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
// CUSTOM COMPONENT
import Icon from '@/components/Icon.vue';
import NavAccordion from './NavAccordion.vue';
// CUSTOM STORE
import { useSidebar } from '@/stores/sidebar';
// TYPE
import { NavItem } from './type';

const { handleCloseSidebar } = useSidebar();

defineProps<{ item: NavItem }>();
</script>

<template>
    <li
        v-if="!item.children"
        @click="handleCloseSidebar()"
        class="group cursor-pointer border-l-2 border-l-transparent text-muted transition-all duration-300 ease-in-out hover:border-l-primary hover:bg-hover hover:font-medium hover:text-primary"
        :class="{
            '!border-l-primary bg-hover text-primary': route().current(
                item.route,
            ),
        }"
    >
        <Link
            :href="route(item.route)"
            class="flex items-center gap-3 truncate p-4 text-[13px] font-medium"
        >
            <Icon :size="22" :name="item.icon" :strokeWidth="1.2" />

            {{ item.label }}
        </Link>
    </li>

    <li v-else>
        <NavAccordion :item="item" />
    </li>
</template>
