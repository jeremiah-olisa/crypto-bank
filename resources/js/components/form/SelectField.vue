<script setup lang="ts">
import { useField } from 'vee-validate';
// SHADCN COMPONENTS
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// ==============================================================
interface SelectFieldProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
}
// ==============================================================

const props = defineProps<SelectFieldProps>();

const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
    <div>
        <Label :for="id" class="mb-3 inline-block text-sm font-medium">{{
            label
        }}</Label>

        <Select :id="id" v-model:model-value="value">
            <SelectTrigger :class="{ 'border-red-500': errorMessage }">
                <SelectValue
                    :placeholder="placeholder"
                    :class="{ 'text-red-500': errorMessage }"
                />
            </SelectTrigger>

            <SelectContent>
                <slot></slot>
            </SelectContent>
        </Select>

        <span
            role="alert"
            v-if="errorMessage"
            class="ml-2 mt-2 inline-block text-xs font-medium text-red-500"
        >
            {{ errorMessage }}
        </span>
    </div>
</template>
