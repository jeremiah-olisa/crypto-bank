<template>
    <DefaultLayout>
        <Head title="List New Currency" />
        <div class="container mx-auto px-4 py-8">
            <h1 class="mb-6 text-3xl font-bold">Create Currency</h1>

            <!-- Create Currency Form -->
            <div class="mb-8 rounded-lg bg-card p-6 shadow-md">
                <form @submit.prevent="onSubmit" class="space-y-4">
                    <TextField
                        v-model="form.name"
                        label="Currency Name"
                        name="name"
                        placeholder="Bitcoin"
                        id="name"
                        type="text"
                        :error-message="form.errors.name"
                        required
                    />
                    <TextField
                        v-model="form.code"
                        label="Currency Code"
                        name="code"
                        id="code"
                        placeholder="BTC"
                        type="text"
                        :error-message="form.errors.code"
                        required
                    />
                    <div>
                        <label class="mb-1 block text-sm font-medium"
                            >Image Source</label
                        >
                        <div class="mb-2 flex items-center space-x-4">
                            <label class="flex items-center">
                                <input
                                    type="radio"
                                    v-model="imageSourceType"
                                    value="file"
                                    class="mr-2"
                                />
                                File Upload
                            </label>
                            <label class="flex items-center">
                                <input
                                    type="radio"
                                    v-model="imageSourceType"
                                    value="url"
                                    class="mr-2"
                                />
                                Image URL
                            </label>
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
                    <button
                        type="submit"
                        class="rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-dark"
                    >
                        Create Currency
                    </button>
                </form>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import TextField from '@/components/form/TextField.vue';
import DefaultLayout from '@/Layouts/DefaultLayout.vue';
import { Head } from '@inertiajs/vue3';
import { useForm } from 'formjs-vue2';
import { ref } from 'vue';
import * as yup from 'yup';

const isDark = ref(false);
const imageSourceType = ref('file');

const schema = yup.object({
    name: yup.string().required('Currency Name is required'),
    code: yup.string().required('Currency Code is required'),
    image_url: yup.string().url('Image URL must be a valid URL'),
    // .when('imageSourceType', {
    //     is: 'url',
    //     then: yup.string().required('Image URL is required'),
    // }),
});

const form = useForm(
    {
        name: '',
        code: '',
        image_url: '',
    },
    {
        schema: schema,
    },
);

const onSubmit = () => {
    // form.post();
};

const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
        form.image_url = URL.createObjectURL(file);
    }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
