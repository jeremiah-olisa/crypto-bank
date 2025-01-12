<script setup lang="ts">
import { Ban, Bell } from 'lucide-vue-next';
// SHADCDN COMPONENTS
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
// DATA LIST
import { notifications } from '@/data/notifications';
import { Link } from '@inertiajs/vue3'; /* PartiallyEnd: #3632/scriptSetup.vue */
</script>

<template>
    <Popover>
        <PopoverTrigger as-child>
            <button>
                <Bell class="text-primary" :size="22" />
            </button>
        </PopoverTrigger>

        <PopoverContent class="mt-2 w-[350px] p-0 py-3">
            <div
                v-if="notifications.length === 0"
                class="flex flex-col items-center gap-2 px-3 py-10"
            >
                <Ban class="text-slate-400" :size="30" />
                <p class="text-sm">No new notifications</p>
            </div>

            <div v-else>
                <p
                    class="border-b border-border px-4 pb-4 pt-1 text-base font-medium"
                >
                    Notification
                </p>

                <div
                    :key="item.id"
                    v-for="item in notifications"
                    class="cursor-pointer border-b border-b-border px-3 hover:bg-hover"
                    :class="{ 'bg-hover': !item.isRead }"
                >
                    <div class="group flex items-center gap-4 py-4">
                        <span
                            class="h-2 w-2 rounded-full transition-all group-hover:bg-primary"
                            :class="{
                                'bg-slate-400': item.isRead,
                                'bg-primary': !item.isRead,
                            }"
                        >
                        </span>

                        <Avatar>
                            <AvatarImage :src="item.image" alt="User" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div class="flex-grow overflow-hidden">
                            <p class="text-nowrap text-sm font-semibold">
                                {{ item.userName }}
                            </p>

                            <p class="truncate pt-1 text-xs text-muted">
                                {{ item.message }}
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    href="/"
                    class="block px-3 pb-1 pt-3 text-center text-sm font-medium text-primary transition-all hover:underline"
                >
                    View All Notification
                </Link>
            </div>
        </PopoverContent>
    </Popover>
</template>
