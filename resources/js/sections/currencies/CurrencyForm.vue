<script setup lang="ts">
import FormHelpDescription from '@/components/form/FormHelpDescription.vue';
import SelectField from '@/components/form/SelectField.vue';
import TextField from '@/components/form/TextField.vue';
import Button from '@/components/ui/button/Button.vue';
import { Label } from '@/components/ui/label';
import SelectItem from '@/components/ui/select/SelectItem.vue';
import { Switch } from '@/components/ui/switch';
import { useListNewCurrencyForm, useUpdateCurrencyForm } from '@/hooks/forms';
import { IStoreCurrencyForm } from '@/types/currency';
import { ref } from 'vue';

const props = defineProps<{
    currency?: IStoreCurrencyForm;
}>();

const imageSourceType = ref('url');
const categories = [
    { id: 1, title: 'Fiat' },
    { id: 2, title: 'Cryptocurrency' },
];

const { form, submit } = props.currency
    ? useUpdateCurrencyForm(props.currency)
    : useListNewCurrencyForm(props.currency);

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
            v-model="form.name"
            label="Currency Name"
            placeholder="Enter currency name"
            :error-message="form.errors.name"
        />

        <TextField
            id="code"
            name="code"
            v-model="form.code"
            label="Currency Code"
            placeholder="Enter currency code"
            :error-message="form.errors.code"
        />

        <TextField
            id="rate"
            name="rate"
            v-model="form.rate"
            type="number"
            :min="1"
            :max="100"
            label="Currency Rate"
            placeholder="Enter currency rate"
            help-description="Platform's percentage markup over the market price."
            :error-message="form.errors.rate"
        />

        <SelectField
            id="category"
            name="category"
            v-model="form.category"
            label="Currency Category"
            placeholder="Select category"
            :error-message="form.errors.category"
            help-description="Type of currency, e.g., Fiat (USD) or Crypto (Bitcoin)."
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
            <!-- <div class="mb-2 flex items-center space-x-4">
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

                    <div class="flex items-center space-x-2">
                        <RadioGroupItem value="file" id="file-option" />
                        <label for="file-option" class="text-sm font-medium">
                            File Upload
                        </label>
                    </div>
                </RadioGroup>
            </div> -->
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
            <FormHelpDescription
                align="end"
                description="Shows if the currency is publicly listed and visible to users."
            />
        </div>

        <!-- Submit Button -->
        <Button
            type="submit"
            :loading="form.processing"
            :disabled="form.processing"
        >
            {{ currency ? 'Update' : 'Create' }} Currency
        </Button>
    </form>
</template>
