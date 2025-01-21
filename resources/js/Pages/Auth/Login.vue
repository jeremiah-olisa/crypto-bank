<script setup lang="ts">
import Checkbox from '@/components/Checkbox.vue';
import TextField from '@/components/form/TextField.vue';
import Button from '@/components/ui/button/Button.vue';
import { useLoginForm } from '@/hooks/forms';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { Link } from '@inertiajs/vue3';

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const { form, submit } = useLoginForm();
</script>

<template>
    <Head title="Log in" />
    <AuthLayout
        form-title="Sign In"
        title="Welcome Back to the Future of Crypto Trading!"
        subtitle="Your Digital Assets Are Just a Click Away"
        description="Sign in to access your crypto portfolio and start trading with ease. Our platform offers secure, fast, and transparent exchanges, providing you with everything you need to manage your digital assets efficiently. "
    >
        <template #form-action>
            <p class="text-muted">New user?</p>
            <Link
                :href="route('register')"
                class="text-primary underline underline-offset-2"
            >
                Create an Account
            </Link>
        </template>

        <form @submit.prevent="submit">
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
