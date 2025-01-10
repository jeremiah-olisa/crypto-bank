<script setup lang="ts">
import { VisuallyHidden } from 'radix-vue';
// SHADCN COMPONENTS
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
// CUSTOM COMPONENTS
import SidebarNavigation from './sidebar/SidebarNavigation.vue';
// CUSTOM COMPOSABLE
import { useSidebar } from '@/stores/sidebar';

const sidebarStore = useSidebar();
</script>

<template>
    <Sheet
        :open="sidebarStore.isSidebarOpen"
        @update:open="sidebarStore.handleSidebarToggle()"
    >
        <SheetContent
            side="left"
            class="absolute top-0 w-[280px] border-r-0 p-0 outline-none"
        >
            <VisuallyHidden>
                <SheetHeader>
                    <SheetTitle>{{ $page.props.app.name }}</SheetTitle>
                    <!-- <SheetDescription
                        >UKO Admin & Client Dashboard Template</SheetDescription
                    > -->
                </SheetHeader>
            </VisuallyHidden>

            <SidebarNavigation />
        </SheetContent>
    </Sheet>
</template>
