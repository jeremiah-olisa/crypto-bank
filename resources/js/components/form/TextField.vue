<script setup lang="ts">
import { InputHTMLAttributes } from 'vue';
// SHADCN COMPONENTS
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useVModel } from '@vueuse/core';
import InputError from '../InputError.vue';
import FormHelpDescription from './FormHelpDescription.vue';

// ==============================================================
interface TextFieldProps {
    id: string;
    name: string;
    label?: string;
    min?: number;
    max?: number;
    placeholder: string;
    disabled?: boolean;
    errorMessage?: string;
    type?: InputHTMLAttributes['type'];
    modelValue?: string | number;
    defaultValue?: string | number;
    helpDescription?: string;
}
// ==============================================================

const props = withDefaults(defineProps<TextFieldProps>(), {
    type: 'text',
    disabled: false,
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
            class="mb-3 flex gap-3 text-sm font-medium"
            >{{ label }}
            <FormHelpDescription
                v-if="helpDescription"
                :description="helpDescription"
            />
        </Label>

        <Input
            :id="id"
            step="0.01"
            :type="type"
            v-model="modelValue"
            :disabled="disabled"
            :error="!!errorMessage"
            :placeholder="placeholder"
            :max="max"
            :min="min"
        />

        <InputError :message="errorMessage" />
    </div>
</template>
