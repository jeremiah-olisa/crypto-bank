<script setup lang="ts">
import Header from './header/Header.vue';
import MobileSidebar from './MobileSidebar.vue';
import SidebarNavigation from './sidebar/SidebarNavigation.vue' /* PartiallyEnd: #3632/scriptSetup.vue */; /* PartiallyEnd: #3632/scriptSetup.vue */
</script>

<template>
    <!-- SIDEBAR NAVIGATION SECTION FOR DESKTOP DEVICE -->
    <aside
        class="fixed left-0 top-0 z-[1111] hidden h-screen w-[260px] bg-white dark:bg-background lg:block 2xl:w-[280px] rtl:left-auto rtl:right-0"
    >
        <SidebarNavigation />
    </aside>

    <main
        class="h-full lg:ml-[260px] 2xl:ml-[280px] rtl:ml-auto rtl:mr-[260px] rtl:2xl:mr-[280px]"
    >
        <!-- HEADER SECTION -->
        <Header></Header>

        <!-- NAVIGATION DRAWER FOR SMALL DEVICE -->
        <MobileSidebar />

        <!-- PAGE / ROUTE VIEW -->
        <div class="mx-auto max-w-screen-2xl px-4 sm:px-7 2xl:px-20">
            <slot />
        </div>
    </main>
</template>
