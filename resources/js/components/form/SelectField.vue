<script setup lang="ts">
// SHADCN COMPONENTS
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useVModel } from '@vueuse/core';
import FormHelpDescription from './FormHelpDescription.vue';

// ==============================================================
interface SelectFieldProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
}
// ==============================================================

const props = defineProps<
    SelectFieldProps & {
        defaultValue?: string;
        modelValue?: string;
        errorMessage?: string;
        helpDescription?: string;
    }
>();

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void;
}>();
const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
});
</script>

<template>
    <div>
        <Label :for="id" class="mb-3 flex gap-3 text-sm font-medium"
            >{{ label }}
            <FormHelpDescription
                v-if="helpDescription"
                align="end"
                :description="helpDescription"
            />
        </Label>

        <Select :id="id" v-model="modelValue">
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
