<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import DefaultLayout from '@/Layouts/DefaultLayout.vue';
import RoleForm from '@/sections/user-management/RoleForm.vue';
import { Head } from '@inertiajs/vue3';

// CUSTOM COMPONENTS
</script>
<template>
    <DefaultLayout>
        <Head title="Create Role" />
        <Card class="mx-auto mb-6 mt-2 max-w-screen-lg p-6">
            <CardTitle class="mb-6 text-base">{{ 'Create Role' }}</CardTitle>

            <RoleForm />
        </Card>
    </DefaultLayout>
</template>
