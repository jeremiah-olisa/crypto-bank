<script setup lang="ts">
import SelectField from '@/components/form/SelectField.vue';
import TextField from '@/components/form/TextField.vue';
import Button from '@/components/ui/button/Button.vue';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import { Switch } from '@/components/ui/switch';
import { pushErrorMessages, throwAxiosError } from '@/lib/utils';
import { router } from '@inertiajs/vue3';
import { useForm } from 'formjs-vue2';
import { push } from 'notivue';
import { ref } from 'vue';

import * as yup from 'yup';

const imageSourceType = ref('url');
const categories = [
    { id: 1, title: 'Fiat' },
    { id: 2, title: 'Cryptocurrency' },
];

const validationSchema = yup.object({
    name: yup.string().required('Currency Name is required'),
    code: yup.string().required('Currency Code is required'),
    category: yup.string().required('Category is required'),
    is_published: yup.boolean().required('Is Published is required'),
    image_url: yup.string().url('Image URL must be a valid URL'),
});

const form = useForm(
    {
        name: '',
        code: '',
        category: '',
        image_url: '',
        is_published: true, // Default to active
    },
    { schema: validationSchema },
);

const submit = () => {
    form.validate();

    if (form.hasErrors) return;

    form.post(route('login'), {
        onSuccess: () => {
            form.reset();
            push.success('Login successful');
            router.visit(route('dashboard'));
        },
        onError: throwAxiosError,
        onErrors: pushErrorMessages,
    });
};

const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
        form.image_url = URL.createObjectURL(file);
    }
};
</script>

<template>
    <form @submit.prevent="submit" class="grid grid-cols-2 gap-x-5 gap-y-5">
        <TextField
            id="name"
            name="name"
            label="Currency Name"
            placeholder="Enter currency name"
            :error-message="form.errors.name"
        />

        <TextField
            id="code"
            name="code"
            label="Currency Code"
            placeholder="Enter currency code"
            :error-message="form.errors.code"
        />

        <SelectField
            id="category"
            name="category"
            label="Currency Category"
            placeholder="Select category"
            class="col-span-2"
        >
            <SelectItem
                v-for="item in categories"
                :key="item.id"
                :value="item.title"
            >
                {{ item.title }}
            </SelectItem>
        </SelectField>

        <div class="col-span-2">
            <Label class="mb-1 block text-sm font-medium">Currency Logo</Label>
            <div class="mb-2 flex items-center space-x-4">
                <RadioGroup
                    v-model="imageSourceType"
                    class="flex items-center space-x-4"
                >
                    <Label class="text-sm font-medium">Image Source: </Label>

                    <div class="flex items-center space-x-2">
                        <RadioGroupItem value="url" id="url-option" />
                        <label for="url-option" class="text-sm font-medium">
                            Image URL
                        </label>
                    </div>

                    <!-- File Upload Option -->
                    <div class="flex items-center space-x-2">
                        <RadioGroupItem value="file" id="file-option" />
                        <label for="file-option" class="text-sm font-medium">
                            File Upload
                        </label>
                    </div>
                </RadioGroup>
            </div>
            <input
                v-if="imageSourceType === 'file'"
                type="file"
                @change="handleFileUpload"
                accept="image/*"
                class="w-full rounded-md border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <TextField
                v-else
                v-model="form.image_url"
                label="Image URL"
                name="image_url"
                id="image_url"
                type="url"
                placeholder="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040"
                :error-message="form.errors.image_url"
                required
            />
        </div>

        <!-- Status -->
        <div class="col-span-2 flex items-center gap-2">
            <Switch
                id="status"
                :checked="form.is_published"
                @update:checked="(p) => (form.is_published = p)"
            />
            <Label for="status" class="text-sm font-medium">Active</Label>
        </div>

        <!-- Submit Button -->
        <Button type="submit"> Create Currency </Button>
    </form>
</template>
