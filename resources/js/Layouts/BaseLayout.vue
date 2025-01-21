<script lang="ts" setup>
import { usePage } from '@inertiajs/vue3';
import {
    lightTheme,
    Notification,
    NotificationProgress,
    Notivue,
    NotivueSwipe,
    NotivueTheme,
    push,
} from 'notivue';
import { computed, onMounted, ref } from 'vue';

const theme: NotivueTheme = {
    ...lightTheme,
    '--nv-icon-size': '1rem',
    '--nv-spacing': '.75rem',
    '--nv-global-bg': 'hsl(var(--card))',
    '--nv-global-border': 'hsl(var(--border))',
    '--nv-global-fg': 'hsl(var(--card-foreground))',
};

const isLoading = ref(true);

const page = usePage();
const flash = computed(() => page.props.flash as any);
onMounted(() => {
    isLoading.value = false;

    if (flash.value.success) push.success(flash.value.success);
    if (flash.value.error) push.error(flash.value.error);
    if (flash.value.info) push.info(flash.value.info);
});
</script>

<template>
    <!-- ADD INITIAL PAGE LOADING -->
    <div
        v-if="isLoading"
        class="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500"
    >
        <div
            class="h-16 w-16 animate-spin rounded-full border-[6px] border-border border-t-primary"
        />
    </div>

    <template v-else>
        <div
            v-if="!$page.props.app.isProduction"
            class="text-md w-full bg-destructive text-center font-medium text-destructive-foreground"
        >
            This is a <strong>DEVELOPMENT</strong> Environment
        </div>
        <slot />

        <!-- NOTIVUE NOTIFICATION -->
        <Notivue v-slot="item">
            <NotivueSwipe :item="item">
                <Notification :item="item" :theme="theme">
                    <NotificationProgress :item="item" />
                </Notification>
            </NotivueSwipe>
        </Notivue>
    </template>
</template>
