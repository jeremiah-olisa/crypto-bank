import { router } from '@inertiajs/vue3';
import { reactive, watch } from 'vue';

export function useQuerySync<T extends Record<string, any>>(initialState: T) {
    const state = reactive<T>({ ...initialState });

    // Initialize state from the current query parameters
    Object.keys(initialState).forEach((key) => {
        if (route().queryParams[key] !== undefined) {
            state[key] = route().queryParams[key] as any;
        }
    });

    // Watch state and update query parameters whenever it changes
    watch(
        state,
        (newState) => {
            const newQuery = {
                ...route().queryParams, // Keep existing query parameters
                ...newState, // Overwrite with the updated state
            };

            // Remove empty values from the query
            Object.keys(newQuery).forEach((key) => {
                if (!newQuery[key]) {
                    delete newQuery[key];
                }
            });

            router.visit(route(String(route().current()), newQuery), {
                replace: true,
            });
        },
        { deep: true }, // Watch deeply for changes within the state
    );

    return state;
}
