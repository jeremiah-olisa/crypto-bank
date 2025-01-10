<script setup lang="ts">
import { InputHTMLAttributes } from 'vue';
// SHADCN COMPONENTS
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useVModel } from '@vueuse/core';

// ==============================================================
interface TextFieldProps {
    id: string;
    name: string;
    label?: string;
    placeholder: string;
    isDisable?: boolean;
    errorMessage?: string;
    type?: InputHTMLAttributes['type'];
    modelValue?: string | number;
    defaultValue?: string | number;
}
// ==============================================================

const props = withDefaults(defineProps<TextFieldProps>(), {
    type: 'text',
    isDisable: false,
});

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
        <Label
            v-if="label"
            :for="id"
            class="mb-3 inline-block text-sm font-medium"
            >{{ label }}</Label
        >

        <Input
            :id="id"
            step="0.01"
            :type="type"
            v-model="modelValue"
            :disabled="isDisable"
            :error="!!errorMessage"
            :placeholder="placeholder"
        />

        <span
            role="alert"
            v-if="errorMessage"
            class="ml-2 mt-2 inline-block text-xs font-medium text-red-500"
        >
            {{ errorMessage }}
        </span>
    </div>
</template>
