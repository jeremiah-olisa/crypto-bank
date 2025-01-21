<template>
    <DefaultLayout>
        <Head :title="title" />
        <Card class="mx-auto mb-6 mt-2 max-w-screen-lg p-6">
            <CardTitle class="mb-6 text-base">{{ title }}</CardTitle>
            <CurrencyForm :currency="currency" />
        </Card>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/Layouts/DefaultLayout.vue';
import { Card, CardTitle } from '@/components/ui/card';
import CurrencyForm from '@/sections/currencies/CurrencyForm.vue';
import { IStoreCurrencyForm } from '@/types/currency';
import { computed } from 'vue';

const props = defineProps<{
    currency?: IStoreCurrencyForm;
}>();

const title = computed(() =>
    !props.currency ? 'List New Currency' : 'Update Currency',
);
</script>
