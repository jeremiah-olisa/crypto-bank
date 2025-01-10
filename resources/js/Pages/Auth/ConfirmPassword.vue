<script setup lang="ts">
import TextField from '@/components/form/TextField.vue';
import Button from '@/components/ui/button/Button.vue';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { pushErrorMessages, throwAxiosError } from '@/lib/utils';
import { Link } from '@inertiajs/vue3';
import { useForm } from 'formjs-vue2';
import { push } from 'notivue';
import * as yup from 'yup';

// Props
defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

// Validation schema for confirm password
const validationSchema = yup.object({
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const form = useForm(
    {
        password: '',
    },
    { schema: validationSchema },
);

const submit = () => {
    form.validate();

    if (form.hasErrors) return;

    // Attempt to confirm the password
    form.post(route('password.confirm'), {
        onSuccess: () => {
            form.reset();
            push.success('Password reset successfully');
        },
        onError: throwAxiosError,
        onErrors: pushErrorMessages,
    });
};
</script>

<template>
    <AuthLayout
        form-title="Confirm Password"
        title="Secure Area"
        subtitle="Please confirm your password"
        description="To proceed, please confirm your password for added security."
    >
        <Head title="Confirm Password" />
        <template #form-action>
            <p class="text-muted">Back to</p>
            <Link
                prefetchs
                :href="route('password.request')"
                class="text-primary underline underline-offset-2"
            >
                Forgot Password
            </Link>
        </template>

        <form @submit="submit">
            <div class="space-y-5">
                <!-- Password field -->
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    v-model="form.password"
                    :error-message="form.errors.password"
                    required
                    autofocus
                    autocomplete="current-password"
                    @input="form.validate('password')"
                />
            </div>

            <Button
                :disabled="form.processing"
                :loading="form.processing"
                type="submit"
                class="!mt-8 w-full"
                >Confirm Password</Button
            >
        </form>
    </AuthLayout>
</template>
