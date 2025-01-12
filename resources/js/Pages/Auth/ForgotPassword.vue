<script setup lang="ts">
import TextField from '@/components/form/TextField.vue';
import Button from '@/components/ui/button/Button.vue';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { pushErrorMessages, throwAxiosError } from '@/lib/utils';
import { Head, Link } from '@inertiajs/vue3';
import { useForm } from 'formjs-vue2';
import { push } from 'notivue';
import * as yup from 'yup';

defineProps<{
    status?: string;
}>();

const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
});
const form = useForm(
    {
        email: '',
    },
    { schema: validationSchema },
);

const submit = () => {
    form.validate();

    if (form.hasErrors) return;
    form.post(route('password.email'), {
        onSuccess: () => {
            form.reset('email');
        },
        onFinish: () => {
            push.success('Password reset instuctions sent successfully');
        },
        onError: throwAxiosError,
        onErrors: pushErrorMessages,
    });
};
</script>

<template>
    <AuthLayout
        form-title="Forgot Password?"
        description=" Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one."
    >
        <Head title="Forgot Password" />
        <template #form-action>
            <div class="mb-4 flex w-full flex-col gap-4">
                <div class="flex gap-1">
                    <p class="text-muted">Remembered Password?</p>
                    <Link
                        :href="route('login')"
                        class="text-primary underline underline-offset-2"
                    >
                        Login
                    </Link>
                </div>

                <p
                    class="w-full rounded-lg bg-primary/10 p-3 text-center text-sm text-primary"
                >
                    Provide your email address, and instructions will be sent to
                    you
                </p>
            </div>
        </template>

        <form class="mt-8 space-y-6" @submit.prevent="submit">
            <TextField
                id="email"
                name="email"
                label="Email"
                placeholder="Enter email"
                v-model="form.email"
                :error-message="form.errors.email"
            />

            <Button
                :disabled="form.processing"
                :loading="form.processing"
                type="submit"
                class="w-full"
                >Send Reset Link</Button
            >
        </form>
    </AuthLayout>
</template>
