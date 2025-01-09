<script setup lang="ts">
// SHADCN COMPONENTS
import { Button } from '@/components/ui/button';
import {
    Pagination,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
    PaginationList,
    PaginationListItem,
    PaginationNext,
    PaginationPrev,
} from '@/components/ui/pagination';

// ==============================================================
interface Props {
    total: number;
    lastIndex: number;
    firstIndex: number;
    //   currentPage: number;
    itemsPerPage?: number;
}
// ==============================================================

withDefaults(defineProps<Props>(), { itemsPerPage: 10 });

const model = defineModel<number>({ default: 1 });
</script>

<template>
    <div
        class="m-4 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between"
    >
        <Pagination
            show-edges
            v-slot="{ page }"
            v-model:page="model"
            :total="total"
            :items-per-page="itemsPerPage"
        >
            <PaginationList v-slot="{ items }" class="flex items-center gap-3">
                <PaginationFirst class="border-none rtl:rotate-180" />
                <PaginationPrev class="border-none rtl:rotate-180" />

                <template v-for="(item, index) in items">
                    <PaginationListItem
                        v-if="item.type === 'page'"
                        :key="index"
                        :value="item.value"
                        as-child
                    >
                        <Button
                            class="h-8 w-8 border-none p-0"
                            :variant="
                                item.value === page ? 'default' : 'outline'
                            "
                        >
                            {{ item.value }}
                        </Button>
                    </PaginationListItem>

                    <PaginationEllipsis
                        v-else
                        :key="item.type"
                        :index="index"
                    />
                </template>

                <PaginationNext class="border-none rtl:rotate-180" />
                <PaginationLast class="border-none rtl:rotate-180" />
            </PaginationList>
        </Pagination>

        <p class="px-7 text-sm text-muted">
            Showing <span class="font-medium">{{ firstIndex + 1 }}</span> to
            <span class="font-medium">{{ lastIndex }}</span> of
            <span class="font-medium">{{ total }}</span> entries
        </p>
    </div>
</template>
