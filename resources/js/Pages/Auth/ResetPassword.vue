<script setup lang="ts">
import TextField from '@/components/form/TextField.vue';
import Button from '@/components/ui/button/Button.vue';
import useTokenedForm from '@/hooks/useTokenedForm';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { pushErrorMessages, throwAxiosError } from '@/lib/utils';
import { Link } from '@inertiajs/vue3';
import { push } from 'notivue';
import * as yup from 'yup';

const props = defineProps<{
    email: string;
    token: string;
}>();

// Validation schema for reset password
const validationSchema = yup.object({
    token: yup.string().required('Token is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    password_confirmation: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .test('passwordMatch', 'Password do not match', function (value) {
            return this.parent.password === value;
        }),
});

const form = useTokenedForm(
    {
        token: props.token,
        email: props.email,
        password: '',
        password_confirmation: '',
    },
    validationSchema,
);

const submit = () => {
    form.validate();

    if (form.hasErrors) return;

    // Submit the reset password request
    form.post(route('password.store'), {
        onSuccess: () => {
            form.reset('password', 'password_confirmation');
            push.success('Password reset successfully');
        },
        onError: throwAxiosError,
        onErrors: pushErrorMessages,
    });
};
</script>

<template>
    <AuthLayout
        form-title="Reset Password"
        title="Reset Your Password"
        subtitle="Please provide a new password to continue."
        description="Enter your new password and password confirmation to reset your password."
    >
        <Head title="Reset Password" />
        <template #form-action>
            <p class="text-muted">Back to</p>
            <Link
                :href="route('login')"
                class="text-primary underline underline-offset-2"
            >
                Login
            </Link>
        </template>

        <form @submit.prevent="submit">
            <div class="space-y-5">
                <!-- Email field -->
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    disabled
                    label="Email"
                    placeholder="Enter your email"
                    :default-value="form.email"
                    :error-message="form.errors.email"
                    required
                    readonly
                />

                <!-- Password field -->
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    label="New Password"
                    placeholder="Enter your new password"
                    v-model="form.password"
                    :error-message="form.errors.password"
                    required
                    autocomplete="new-password"
                    @input="form.validate('password')"
                />
                <!-- Password Confirmation field -->
                <TextField
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    label="Confirm Password"
                    placeholder="Confirm your new password"
                    v-model="form.password_confirmation"
                    :error-message="form.errors.password_confirmation"
                    required
                    autocomplete="new-password"
                    @input="form.validate('password_confirmation')"
                />
            </div>

            <Button
                :disabled="form.processing"
                :loading="form.processing"
                type="submit"
                class="!mt-8 w-full"
                >Reset Password</Button
            >
        </form>
    </AuthLayout>
</template>
