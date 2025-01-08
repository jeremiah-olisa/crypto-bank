<script lang="ts" setup>
import { lightTheme, Notification, Notivue, NotivueTheme } from 'notivue';
import { onMounted, ref } from 'vue';

const theme: NotivueTheme = {
    ...lightTheme,
    '--nv-icon-size': '1rem',
    '--nv-spacing': '.75rem',
    '--nv-global-bg': 'var(--card)',
    '--nv-global-border': 'var(--border)',
    '--nv-global-fg': 'var(--card-foreground)',
};

const isLoading = ref(true);

onMounted(() => {
    isLoading.value = false;
});
</script>

<template>
    <!-- ADD INITIAL PAGE LOADING -->
    <div
        v-if="isLoading"
        class="bg-background fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
    >
        <div
            class="border-border border-t-primary h-16 w-16 animate-spin rounded-full border-[6px]"
        />
    </div>

    <template v-else>
        <slot />

        <!-- NOTIVUE NOTIFICATION -->
        <Notivue v-slot="item">
            <Notification :item="item" :theme="theme" />
        </Notivue>
    </template>
</template>
