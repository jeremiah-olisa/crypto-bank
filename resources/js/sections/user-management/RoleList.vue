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
// Custom Components
import Icon from '@/components/Icon.vue';
import { Link } from '@inertiajs/vue3';

// Sample Data Array
const roles = [
    {
        id: 1,
        name: 'Administrator',
        permissionsCount: 25,
        usersCount: 10,
        description: 'Full access to all features and settings.',
    },
    {
        id: 2,
        name: 'Editor',
        permissionsCount: 15,
        usersCount: 30,
        description: 'Can manage content but has limited access to settings.',
    },
    {
        id: 3,
        name: 'Viewer',
        permissionsCount: 5,
        usersCount: 50,
        description: 'Can view content but cannot make changes.',
    },
];

// Table Header Titles
const tableHead = [
    'Role Name',
    'Permissions',
    'Users',
    'Description',
    'Action',
];
</script>

<template>
    <Card class="mb-6">
        <Scrollbar>
            <!-- Roles Table -->
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
                    <TableRow v-if="roles.length === 0">
                        <TableCell
                            colspan="5"
                            class="m-4 bg-slate-200/20 py-24 text-center"
                        >
                            <p class="mb-4 text-2xl">No roles available</p>
                            <Button variant="outline" class="rounded-full">
                                Add a Role
                            </Button>
                        </TableCell>
                    </TableRow>

                    <!-- RENDER ROLES -->
                    <template v-if="roles.length > 0">
                        <TableRow
                            v-for="role in roles"
                            :key="role.id"
                            class="[&>td]:border-b [&>td]:border-border [&>td]:font-normal"
                        >
                            <!-- Role Name -->
                            <TableCell>
                                <p class="font-medium">{{ role.name }}</p>
                            </TableCell>

                            <!-- Number of Permissions -->
                            <TableCell>
                                <Badge variant="info">
                                    {{ role.permissionsCount }}
                                </Badge>
                            </TableCell>

                            <!-- Number of Users -->
                            <TableCell>
                                <Badge variant="success">
                                    {{ role.usersCount }}
                                </Badge>
                            </TableCell>

                            <!-- Description -->
                            <TableCell>
                                <p class="text-sm text-muted">
                                    {{ role.description }}
                                </p>
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
                                                :href="
                                                    route(
                                                        'user-management.roles.edit',
                                                        { roleId: role.id },
                                                    )
                                                "
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
