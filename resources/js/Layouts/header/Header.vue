<script setup lang="ts">
import { useDark, useToggle, useWindowScroll } from '@vueuse/core';
// CUSTOM STORE
import { useSidebar } from '@/stores/sidebar';
// CUSTOM COMPONENTS
import Icon from '@/components/Icon.vue';
import NotificationPopover from './popovers/NotificationPopover.vue';
import ProfilePopover from './popovers/ProfilePopover.vue';
import SearchPopover from './popovers/SearchPopover.vue';

const isDark = useDark();
// const dir = useTextDirection();
const toggleDark = useToggle(isDark);
const { y } = useWindowScroll({ behavior: 'smooth' });

const sidebarStore = useSidebar();

// const changeDirection = () => {
//     dir.value = dir.value === 'rtl' ? 'ltr' : 'rtl';
// };
</script>

<template>
    <header
        class="sticky top-0 z-[12] w-full py-5 transition-all"
        :class="{ 'shadow-sm backdrop-blur-sm': y > 0 }"
    >
        <div
            class="mx-auto flex max-w-screen-2xl items-center justify-between px-4 sm:px-7 2xl:px-20"
        >
            <div class="flex items-center gap-2">
                <button
                    class="lg:hidden"
                    @click="sidebarStore.handleSidebarToggle()"
                >
                    <Icon name="Menu" class="text-primary" />
                </button>

                <!-- <button>
          <Icon name="Search" class="stroke-muted" />
        </button> -->
                <SearchPopover />
            </div>

            <div class="flex items-center gap-[16px]">
                <!-- <button @click="changeDirection()">
          <Icon
            v-if="dir === 'rtl'"
            :size="22"
            :strokeWidth="1.5"
            name="AlignLeft"
            class="text-muted" />
          <Icon v-else :size="22" :strokeWidth="1.5" name="AlignRight" class="text-muted" />
        </button> -->

                <button @click="toggleDark()">
                    <Icon
                        :size="22"
                        name="Sun"
                        v-if="isDark"
                        class="text-warning"
                    />
                    <Icon :size="22" name="Moon" v-else class="text-muted" />
                </button>

                <NotificationPopover />

                <ProfilePopover />
            </div>
        </div>
    </header>
</template>
