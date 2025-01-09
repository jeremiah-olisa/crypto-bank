<script setup lang="ts">
import { router } from '@inertiajs/vue3';
// SHADCDN COMPONENTS
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
// CUSTOM COMPONENT
import Icon from '@/components/Icon.vue';
// AUTH COMPOSABLE
import { useAuth } from '@/auth/useAuth';

const { user } = useAuth();

const handleLogout = async () => {
    router.visit(route('logout'));
};
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <div
                class="flex cursor-pointer items-center gap-2 rounded-full bg-hover py-2 pl-3 pr-2"
            >
                <p class="text-nowrap text-[13px] font-semibold">
                    Hi. {{ user?.displayName || 'John Smith' }}
                </p>

                <Avatar size="xs" class="border border-white">
                    <AvatarImage
                        v-if="user?.photoURL"
                        :src="user.photoURL"
                        alt="User"
                    />
                    <AvatarFallback>{{
                        user?.displayName?.charAt(0)
                    }}</AvatarFallback>
                </Avatar>
            </div>
        </PopoverTrigger>

        <PopoverContent class="w-[200px] rounded-lg px-0 py-2">
            <ul class="cursor-pointer text-sm">
                <li
                    class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
                >
                    <Icon name="User" :size="18" class="text-muted" /> Profile
                </li>

                <li
                    class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
                >
                    <Icon name="Settings" :size="18" class="text-muted" />
                    Account
                </li>

                <li
                    class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
                >
                    <Icon name="Users" :size="18" class="text-muted" /> Manage
                    Team
                </li>

                <li class="py-1">
                    <hr
                        class="border-0 border-b border-b-gray-200 dark:border-b-gray-700"
                    />
                </li>

                <li
                    class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
                    @click="handleLogout()"
                >
                    <Icon name="LogOut" :size="18" class="text-muted" /> Log Out
                </li>
            </ul>
        </PopoverContent>
    </Popover>
</template>
