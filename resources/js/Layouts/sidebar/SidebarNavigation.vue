<script setup lang="ts">
import Scrollbar from 'simplebar-vue';
// CUSTOM COMPONENT
import NavItem from './NavItem.vue';
// MENU LIST
import { navigation } from '@/data/navigation';
import { Link } from '@inertiajs/vue3' /* PartiallyEnd: #3632/scriptSetup.vue */ /* PartiallyEnd: #3632/scriptSetup.vue */; /* PartiallyEnd: #3632/scriptSetup.vue */
</script>

<template>
    <div class="mb-2 px-4 py-5 text-lg font-bold text-foreground">
        <Link :href="route('dashboard')"> {{ $page.props.app.name }} </Link>
    </div>

    <Scrollbar class="h-[calc(100vh-75px)]">
        <nav class="space-y-6 pb-4">
            <div
                class="space-y-3"
                v-for="navGroup in navigation"
                :key="navGroup.name"
            >
                <h4
                    class="px-5 text-[12px] font-semibold uppercase text-primary"
                >
                    {{ navGroup.name }}
                </h4>

                <ul>
                    <NavItem
                        v-for="(menuItem, index) in navGroup.menu"
                        :item="menuItem"
                        :key="index"
                    />
                </ul>
            </div>
        </nav>
    </Scrollbar>
</template>
