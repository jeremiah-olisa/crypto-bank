<script lang="ts" setup>
import { lightTheme, Notification, Notivue, NotivueTheme } from 'notivue';
import { onMounted, ref } from 'vue';

const theme: NotivueTheme = {
    ...lightTheme,
    '--nv-icon-size': '1rem',
    '--nv-spacing': '.75rem',
    '--nv-global-bg': 'hsl(var(--card))',
    '--nv-global-border': 'hsl(var(--border))',
    '--nv-global-fg': 'hsl(var(--card-foreground))',
};

const isLoading = ref(true);

const isProduction = false;

onMounted(() => {
    isLoading.value = false;
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
            v-if="!isProduction"
            class="text-md w-full bg-destructive text-center font-medium text-destructive-foreground"
        >
            This is a <strong>DEVELOPMENT</strong> Environment
        </div>
        <slot />

        <!-- NOTIVUE NOTIFICATION -->
        <Notivue v-slot="item">
            <Notification :item="item" :theme="theme" />
        </Notivue>
    </template>
</template>
