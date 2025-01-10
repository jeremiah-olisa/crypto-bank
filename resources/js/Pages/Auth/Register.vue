<script setup lang="ts">
import AuthLayout from '@/Layouts/AuthLayout.vue';
import Checkbox from '@/components/Checkbox.vue';
import InputError from '@/components/InputError.vue';
import TextField from '@/components/form/TextField.vue';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/vue3';
import { useForm } from 'formjs-vue2';
import { push } from 'notivue';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
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
    terms: yup
        .boolean()
        .oneOf([true], 'You must accept the terms')
        .required('Terms acceptance is required'),
});
const form = useForm(
    {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    },
    { schema: validationSchema },
);

const submit = () => {
    form.post(route('register'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation', 'terms');
            push.success('User registered successfully');
        },
        onError: (e) => {
            push.error(
                (e.response?.data as any)?.message ?? 'An Error Occurred',
            );

            // push.error('Invalid credentials');
        },
    });
};
</script>

<template>
    <AuthLayout
        form-title="Start Trading Crypto Today"
        title="Welcome to the Future of Digital Trading!"
        subtitle="Secure. Fast. Transparent."
        description="Experience seamless crypto swaps on our platform, where users enjoy a secure, fast, and intuitive exchange environment. With industry-leading security protocols and real-time market insights, you can trade digital assets with confidence. Whether you're an experienced trader or new to the crypto space, our platform ensures smooth transactions and offers you full control over your crypto portfolio. Join a thriving community of traders and unlock endless possibilities in the world of cryptocurrency."
    >
        <Head title="Register" />

        <template #form-action>
            <p class="text-muted">Already have an account?</p>
            <Link
                :href="route('login')"
                class="text-primary underline underline-offset-2"
            >
                Login
            </Link>
        </template>

        <form @submit.prevent="submit">
            <div class="space-y-5">
                <TextField
                    id="name"
                    type="text"
                    label="Full Name"
                    name="name"
                    placeholder="Enter Your Full name"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                    :error-message="form.errors.name"
                    @input="form.validate('name')"
                />

                <TextField
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    placeholder="Enter Your Email Address"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                    :error-message="form.errors.email"
                    @input="form.validate('email')"
                />

                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Enter Your Password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                    :error-message="form.errors.password"
                    @input="form.validate('password')"
                />

                <TextField
                    id="password_confirmation"
                    type="password"
                    label="Confirm Password"
                    name="password_confirmation"
                    placeholder="Enter Your Password Again"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                    :error-message="form.errors.password_confirmation"
                    @input="form.validate('password_confirmation')"
                />
            </div>

            <div class="flex flex-col gap-2">
                <div class="mt-4 flex items-center gap-2">
                    <Checkbox
                        id="terms"
                        class="h-4 w-4 rounded border"
                        :checked="form.terms"
                        :onUpdate:checked="
                            (value) => {
                                form.validate('terms');
                                form.terms = value;
                            }
                        "
                    />
                    <label
                        for="terms"
                        class="text-[13px] font-medium leading-none"
                    >
                        By registering you agree to our terms and condition
                    </label>
                </div>
                <InputError :message="form.errors.terms" />
            </div>

            <Button
                :disabled="form.processing"
                type="submit"
                class="!mt-8 w-full"
                >Sign Up</Button
            >
        </form>
    </AuthLayout>
</template>
