<script setup lang="ts">
import { useField } from 'vee-validate';
// SHADCN COMPONENTS
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// ==============================================================
interface TextAreaFieldProps {
    id: string;
    name: string;
    label?: string;
    placeholder: string;
    isDisable?: boolean;
}
// ==============================================================

const props = withDefaults(defineProps<TextAreaFieldProps>(), {
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

        <Textarea
            rows="6"
            :id="id"
            :disabled="isDisable"
            :placeholder="placeholder"
            v-model:model-value="value"
            :class="{
                'border-red-600 placeholder:text-red-600 focus:ring-red-600':
                    errorMessage,
            }"
        ></Textarea>

        <span
            role="alert"
            v-if="errorMessage"
            class="ml-2 mt-2 inline-block text-xs font-medium text-red-500"
        >
            {{ errorMessage }}
        </span>
    </div>
</template>
