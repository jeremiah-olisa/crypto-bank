<script setup lang="ts">
// SHADCDN COMPONENTS
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
// CUSTOM COMPONENT
import Icon from '@/components/Icon.vue';
import { Link } from '@inertiajs/vue3'; /* PartiallyEnd: #3632/scriptSetup.vue */
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <div
                class="flex cursor-pointer items-center gap-2 rounded-full bg-hover py-2 pl-3 pr-2"
            >
                <p class="text-nowrap text-[13px] font-semibold">
                    Hi. {{ $page.props.auth?.user?.name || 'Anonymous User' }}
                </p>
                <Avatar size="xs" class="border border-white">
                    <AvatarImage
                        v-if="$page.props.auth?.user?.profile_image"
                        :src="$page.props.auth?.user?.profile_image"
                        alt="User"
                    />
                    <AvatarFallback>{{
                        $page.props.auth?.user?.name?.charAt(0)
                    }}</AvatarFallback>
                </Avatar>
            </div>
        </PopoverTrigger>

        <PopoverContent class="w-[200px] rounded-lg px-0 py-2">
            <ul class="cursor-pointer text-sm">
                <Link
                    :href="route('profile.edit')"
                    class="flex items-center gap-2 px-5 py-2 transition-all hover:bg-hover"
                >
                    <Icon name="User" :size="18" class="text-muted" /> Profile
                </Link>

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

                <Link
                    class="flex w-full items-center gap-2 px-5 py-2 text-error transition-all hover:bg-hover"
                    :href="route('logout')"
                    method="post"
                >
                    <Icon name="LogOut" :size="18" />
                    Log Out
                </Link>
            </ul>
        </PopoverContent>
    </Popover>
</template>
