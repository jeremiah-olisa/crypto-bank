<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DefaultLayout from '@/Layouts/DefaultLayout.vue';
import { Head, router } from '@inertiajs/vue3';
// CUSTOM COMPONENTS
import Icon from '@/components/Icon.vue';
import RoleList from '@/sections/user-management/RoleList.vue';
import { reactive } from 'vue';
const state = reactive({
    filters: {
        search: '',
    },
});
</script>
<template>
    <DefaultLayout>
        <Head title="Roles" />
        <!-- PRODUCT TABLE FILTER ACTIONS -->
        <div
            class="mb-6 mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-center"
        >
            <div
                class="flex flex-col items-center gap-3 md:w-3/4 md:flex-row lg:w-2/4"
            >
                <div class="relative w-full">
                    <Input
                        v-model="state.filters.search"
                        type="search"
                        placeholder="Find Role"
                        class="rounded-lg ps-9"
                    />
                    <Icon
                        :size="18"
                        name="Search"
                        :strokeWidth="2"
                        class="absolute inset-y-0 start-3 my-auto text-muted"
                    />
                </div>
            </div>

            <Button
                @click="router.visit(route('user-management.roles.create'))"
            >
                <Icon name="Plus" :strokeWidth="2" :size="18" class="me-2" />
                Add Role
            </Button>
        </div>

        <RoleList />
    </DefaultLayout>
</template>
