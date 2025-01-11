<template>
    <DefaultLayout>
        <Head :title="title" />
        <Card class="mx-auto mb-6 mt-2 max-w-screen-lg p-6">
            <CardTitle class="mb-6 text-base">{{ title }}</CardTitle>
            <CurrencyForm />
        </Card>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/Layouts/DefaultLayout.vue';
import { Card, CardTitle } from '@/components/ui/card';
import CurrencyForm from '@/sections/currencies/CurrencyForm.vue';
import { ref } from 'vue';
const title = ref('List New Currency');
</script>
