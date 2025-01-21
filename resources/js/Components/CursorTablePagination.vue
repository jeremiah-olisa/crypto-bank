<script setup lang="ts">
// SHADCN COMPONENTS
import { Button } from '@/components/ui/button';
import { useQuerySync } from '@/hooks/useQuerySync';
import { IPaginatedData } from '@/types';
import { router } from '@inertiajs/vue3';

const props = defineProps<{
    paginated: IPaginatedData;
}>();

const state = useQuerySync({
    per_page: props.paginated.per_page,
});

const navigate = (url: string | null) => {
    if (url) {
        // Emit an event to the parent to handle navigation
        router.visit(url, route().queryParams);
    }
};
</script>

<template>
    <div class="mt-4 flex items-center justify-between">
        <!-- Previous Page Button -->
        <Button
            :disabled="!paginated.prev_page_url"
            variant="outline"
            class="h-8 px-4"
            @click="navigate(paginated.prev_page_url)"
        >
            Previous
        </Button>

        <!-- Pagination Info -->
        <p class="text-sm text-muted">
            Per Page: <span class="font-medium">{{ state.per_page }}</span>
        </p>

        <!-- Next Page Button -->
        <Button
            :disabled="!paginated.next_page_url"
            variant="outline"
            class="h-8 px-4"
            @click="navigate(paginated.next_page_url)"
        >
            Next
        </Button>
    </div>
</template>
