<script setup lang="ts">
import { useLogo } from '@/hooks/useLogo';
import { Link } from '@inertiajs/vue3';
import BaseLayout from './BaseLayout.vue';

defineProps<{
    title?: string;
    subtitle?: string;
    description?: string;
    formTitle: string;
}>();

const logo = useLogo();
</script>
<template>
    <BaseLayout>
        <div class="grid min-h-screen bg-primary lg:grid-cols-2">
            <div class="hidden items-center p-20 text-white lg:flex xl:px-40">
                <div>
                    <Link
                        prefetch
                        :href="route('home')"
                        class="mb-10 flex items-center gap-2"
                    >
                        <img
                            :src="logo"
                            class="object-fit-cover h-10 object-center"
                            :alt="$page.props.app.name"
                        />
                        <h1 class="text-4xl font-bold">
                            {{ $page.props.app.name }}
                        </h1>
                    </Link>
                    <h4 v-if="title" class="mb-7 text-4xl font-semibold">
                        {{ title }}
                    </h4>
                    <h5 v-if="subtitle" class="text-xl font-medium">
                        {{ subtitle }}
                    </h5>
                    <p v-if="description" class="mt-2 text-sm leading-relaxed">
                        {{ description }}
                    </p>
                </div>
            </div>

            <div
                class="col-span-full content-center bg-background p-10 sm:px-16 sm:py-20 md:px-40 lg:col-span-1 lg:rounded-bl-[2rem] lg:rounded-tl-[2rem] lg:px-20 2xl:px-52 rtl:rounded-bl-none rtl:rounded-tl-none rtl:lg:rounded-br-[2rem] rtl:lg:rounded-tr-[2rem]"
            >
                <h3 class="font-semibold">{{ formTitle }}</h3>
                <div class="mb-10 mt-1 flex gap-1 text-sm font-medium">
                    <slot name="form-action" />
                </div>

                <slot />
            </div>
        </div>
    </BaseLayout>
</template>
