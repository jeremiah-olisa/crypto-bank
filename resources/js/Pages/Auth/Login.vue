<script setup lang="ts">
import Checkbox from '@/components/Checkbox.vue';
import TextField from '@/components/form/TextField.vue';
import Button from '@/components/ui/button/Button.vue';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { pushErrorMessages, throwAxiosError } from '@/lib/utils';
import { Link, router } from '@inertiajs/vue3';
import { useForm } from 'formjs-vue2';
import { push } from 'notivue';
import * as yup from 'yup';

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    remember: yup.boolean().required(),
});
const form = useForm(
    {
        email: '',
        password: '',
        remember: false,
    },
    { schema: validationSchema },
);

const submit = () => {
    form.validate();

    if (form.hasErrors) return;

    form.post(route('login'), {
        onSuccess: () => {
            form.reset('password');
            push.success('Login successful');
            router.visit(route('dashboard'));
        },
        onError: throwAxiosError,
        onErrors: pushErrorMessages,
    });
};
</script>

<template>
    <AuthLayout
        form-title="Sign In"
        title="Welcome Back to the Future of Crypto Trading!"
        subtitle="Your Digital Assets Are Just a Click Away"
        description="Sign in to access your crypto portfolio and start trading with ease. Our platform offers secure, fast, and transparent exchanges, providing you with everything you need to manage your digital assets efficiently. Join a community of like-minded traders and enjoy the power of seamless transactions. Let’s continue shaping the future of crypto, one trade at a time."
    >
        <Head title="Log in" />
        <template #form-action>
            <p class="text-muted">New user?</p>
            <Link
                prefetch
                :href="route('register')"
                class="text-primary underline underline-offset-2"
            >
                Create an Account
            </Link>
        </template>

        <form @submit="submit">
            <div class="space-y-5">
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="Enter email"
                    v-model="form.email"
                    :error-message="form.errors.email"
                    required
                    autofocus
                    autocomplete="username"
                    @input="form.validate('email')"
                />
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter password"
                    required
                    autofocus
                    autocomplete="current-password"
                    v-model="form.password"
                    :error-message="form.errors.password"
                    @input="form.validate('password')"
                />
            </div>

            <div class="mt-3 flex justify-between">
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <Checkbox
                            id="remember"
                            class="h-4 w-4 rounded border"
                            :checked="form.remember"
                            :onUpdate:checked="
                                (value) => {
                                    form.validate('remember');
                                    form.remember = value;
                                }
                            "
                        />
                        <label
                            for="remember"
                            class="text-sm font-medium leading-none"
                            >Remember me</label
                        >
                    </div>
                    <InputError :message="form.errors.remember" />
                </div>

                <Link
                    prefetch
                    :href="route('password.request')"
                    class="text-sm text-primary underline-offset-2 transition-all hover:underline"
                >
                    Forget Password?
                </Link>
            </div>

            <Button
                :disabled="form.processing"
                :loading="form.processing"
                type="submit"
                class="!mt-8 w-full"
                >Sign In</Button
            >
        </form>
    </AuthLayout>
</template>
