<script setup lang="ts">
// Import necessary components
import Scrollbar from 'simplebar-vue';

// SHADCN Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// Sample Data for Permissions
const permissions = [
    {
        id: 1,
        name: 'View Dashboard',
        rolesCount: 5,
        usersCount: 15,
    },
    {
        id: 2,
        name: 'Manage Users',
        rolesCount: 3,
        usersCount: 8,
    },
    {
        id: 3,
        name: 'Edit Permissions',
        rolesCount: 2,
        usersCount: 4,
    },
    {
        id: 4,
        name: 'Delete Records',
        rolesCount: 1,
        usersCount: 2,
    },
];

// Table Header Titles
const permissionTableHead = ['Permission Name', 'Roles', 'Users'];
</script>

<template>
    <Card class="mb-6">
        <Scrollbar>
            <!-- Permissions Table -->
            <Table class="min-w-[800px]">
                <TableHeader>
                    <TableRow>
                        <TableHead
                            v-for="head in permissionTableHead"
                            :key="head"
                            class="px-8 py-5"
                        >
                            {{ head }}
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <!-- No Permissions Message -->
                    <TableRow v-if="permissions.length === 0">
                        <TableCell
                            colspan="4"
                            class="m-4 bg-slate-200/20 py-24 text-center"
                        >
                            <p class="mb-4 text-2xl">
                                No permissions available
                            </p>
                            <Button variant="outline" class="rounded-full">
                                Add a Permission
                            </Button>
                        </TableCell>
                    </TableRow>

                    <!-- Render Permissions -->
                    <template v-if="permissions.length > 0">
                        <TableRow
                            v-for="permission in permissions"
                            :key="permission.id"
                            class="[&>td]:border-b [&>td]:border-border [&>td]:font-normal"
                        >
                            <!-- Permission Name -->
                            <TableCell>
                                <p class="font-medium">{{ permission.name }}</p>
                            </TableCell>

                            <!-- Number of Roles -->
                            <TableCell>
                                <Badge variant="secondary">{{
                                    permission.rolesCount
                                }}</Badge>
                            </TableCell>

                            <!-- Number of Users -->
                            <TableCell>
                                <Badge variant="secondary">{{
                                    permission.usersCount
                                }}</Badge>
                            </TableCell>
                        </TableRow>
                    </template>
                </TableBody>
            </Table>
        </Scrollbar>
    </Card>
</template>
