<script setup lang="ts">
import { useField } from 'vee-validate';
import { InputHTMLAttributes } from 'vue';
// SHADCN COMPONENTS
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// ==============================================================
interface TextFieldProps {
    id: string;
    name: string;
    label?: string;
    placeholder: string;
    isDisable?: boolean;
    type?: InputHTMLAttributes['type'];
}
// ==============================================================

const props = withDefaults(defineProps<TextFieldProps>(), {
    type: 'text',
    isDisable: false,
});

const { value, errorMessage } = useField<string>(() => props.name);
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
            :disabled="isDisable"
            v-model:model-value="value"
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
