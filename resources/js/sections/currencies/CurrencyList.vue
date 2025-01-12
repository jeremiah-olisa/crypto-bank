<script setup lang="ts">
import Scrollbar from 'simplebar-vue';

// SHADCN Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from '@/components/ui/menubar';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// CUSTOM COMPONENTS
// Custom Components
import Icon from '@/components/Icon.vue';
import { Link } from '@inertiajs/vue3';

// Sample Data Array
const currencies = [
    {
        id: 1,
        name: 'US Dollar',
        code: 'USD',
        category: 'Fiat',
        createdAt: '2025-01-01',
        status: 'Published',
        rate: 15,
        price: 100,
    },
    {
        id: 2,
        name: 'Bitcoin',
        code: 'BTC',
        category: 'Cryptocurrency',
        createdAt: '2025-01-02',
        status: 'Draft',
        rate: 3,
        price: 50000,
    },
    // Add more currencies as needed
];

// Table Header Titles
const tableHead = [
    'Currency',
    'Listed On',
    'Market Price',
    'Rate',
    'Status',
    'Action',
];
</script>

<template>
    <Card class="mb-6">
        <Scrollbar>
            <!-- Currencies Table -->
            <Table class="min-w-[1200px]">
                <TableHeader>
                    <TableRow>
                        <TableHead
                            v-for="head in tableHead"
                            :key="head"
                            class="px-8 py-5"
                        >
                            {{ head }}
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <!-- NO DATA MESSAGE -->
                    <TableRow v-if="currencies.length === 0">
                        <TableCell
                            colspan="7"
                            class="m-4 bg-slate-200/20 py-24 text-center"
                        >
                            <p class="mb-4 text-2xl">No currencies available</p>
                            <Button variant="outline" class="rounded-full">
                                Add a Currency
                            </Button>
                        </TableCell>
                    </TableRow>

                    <!-- RENDER CURRENCIES -->
                    <template v-if="currencies.length > 0">
                        <TableRow
                            v-for="currency in currencies"
                            :key="currency.id"
                            class="[&>td]:border-b [&>td]:border-border [&>td]:font-normal"
                        >
                            <!-- Currency Name -->
                            <TableCell>
                                <div>
                                    <p class="font-medium">
                                        {{ currency.name }}
                                        <small>({{ currency.code }})</small>
                                    </p>
                                    <span class="text-xs text-muted">{{
                                        currency.category
                                    }}</span>
                                </div>
                            </TableCell>

                            <!-- Created At -->
                            <TableCell>{{ currency.createdAt }}</TableCell>

                            <!-- Price -->
                            <TableCell>{{ currency.price }}</TableCell>

                            <!-- rate -->
                            <TableCell>
                                <p
                                    :class="{
                                        'text-error': currency.rate < 5,
                                        'text-success': currency.rate > 20,
                                        'text-warning':
                                            currency.rate <= 20 &&
                                            currency.rate >= 5,
                                    }"
                                >
                                    {{ currency.rate }}
                                </p>
                            </TableCell>

                            <!-- Status -->
                            <TableCell>
                                <Badge
                                    :variant="
                                        currency.status === 'Published'
                                            ? 'success'
                                            : 'warning'
                                    "
                                >
                                    {{ currency.status }}
                                </Badge>
                            </TableCell>

                            <!-- Actions -->
                            <TableCell class="flex justify-center">
                                <Menubar
                                    class="justify-center bg-transparent p-0"
                                >
                                    <MenubarMenu>
                                        <MenubarTrigger
                                            class="h-6 w-6 rounded-sm bg-slate-100 p-1 dark:bg-slate-700"
                                        >
                                            <Icon name="Ellipsis" :size="18" />
                                        </MenubarTrigger>

                                        <MenubarContent align="end">
                                            <MenubarItem
                                                :as="Link"
                                                :href="`/products/${currency.id}`"
                                                class="gap-2 px-4 py-2 text-[13px] font-medium hover:!bg-hover"
                                            >
                                                <Icon
                                                    name="SquarePen"
                                                    :size="18"
                                                    class="text-muted"
                                                />
                                                Edit
                                            </MenubarItem>

                                            <MenubarItem
                                                :as="Link"
                                                :href="`/products/${currency.id}/overview`"
                                                class="gap-2 px-4 py-2 text-[13px] font-medium hover:!bg-hover"
                                            >
                                                <Icon
                                                    name="Eye"
                                                    :size="18"
                                                    class="text-muted"
                                                />
                                                View
                                            </MenubarItem>

                                            <MenubarItem
                                                class="gap-2 px-4 py-2 text-[13px] font-medium text-destructive"
                                            >
                                                <Icon
                                                    name="Trash"
                                                    :size="18"
                                                    class="text-destructive"
                                                />
                                                Delete
                                            </MenubarItem>
                                        </MenubarContent>
                                    </MenubarMenu>
                                </Menubar>
                            </TableCell>
                        </TableRow>
                    </template>
                </TableBody>
            </Table>
        </Scrollbar>
    </Card>
</template>
