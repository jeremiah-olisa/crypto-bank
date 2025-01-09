<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { onMounted, ref, watch } from 'vue';
// SHADCDN COMPONENTS
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
// CUSTOM COMPONENT
import Icon from '@/components/Icon.vue';
// CUSTOM STORE
import { useSidebar } from '@/stores/sidebar';
// TYPE
import { RouteName } from '../../../../vendor/tightenco/ziggy/src/js';
import { NavItem } from './type';

const props = defineProps<{ item: NavItem }>();

const isOpen = ref(false);
const { handleCloseSidebar } = useSidebar();

const isActive = (path?: RouteName) => {
    const find = props.item.children?.find((item) => item.route === path);
    if (find) isOpen.value = true;
    else isOpen.value = false;
};

onMounted(async () => {
    // await router.isReady();
    isActive(route().current());
});

watch(
    () => route().current(),
    (newValue) => isActive(newValue),
);
</script>

<template>
    <Collapsible v-model:open="isOpen">
        <CollapsibleTrigger class="w-full">
            <div
                class="cursor-pointer border-l-2 border-l-transparent text-muted transition-all duration-300 ease-in-out hover:border-l-primary hover:bg-hover hover:font-medium hover:text-primary"
                :class="{ '!border-l-primary bg-hover !text-primary': isOpen }"
            >
                <div class="flex items-center justify-between p-4">
                    <div
                        class="flex items-center gap-3 truncate text-[13px] font-medium"
                    >
                        <Icon :name="item.icon" :size="20" :strokeWidth="1.2" />
                        {{ item.label }}
                    </div>

                    <Icon
                        :size="18"
                        name="ChevronDown"
                        class="transition-all duration-300 ease-in-out"
                        :class="{ 'rotate-180': isOpen }"
                    />
                </div>
            </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
            <Link
                :href="child.route"
                v-for="(child, index) in item.children"
                :key="index"
                @click="handleCloseSidebar()"
                class="group flex items-center gap-4 p-4 text-[13px] font-medium text-muted duration-300 ease-in-out hover:bg-hover hover:font-medium hover:text-primary"
                :class="{
                    '!border-l-primary bg-hover text-primary': route().current(
                        child.route,
                    ),
                }"
            >
                <Icon name="Dot" :size="20" />
                {{ child.label }}
            </Link>
        </CollapsibleContent>
    </Collapsible>
</template>
