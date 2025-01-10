<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { pushErrorMessages, throwAxiosError } from '@/lib/utils';
import { Link, router } from '@inertiajs/vue3';
import { useForm } from 'formjs-vue2';
import { push } from 'notivue';
import { computed } from 'vue';

const props = defineProps<{
    status?: string;
}>();

// Form initialization using formjs-vue2
const form = useForm({});

const submit = () => {
    form.post(route('verification.send'), {
        onSuccess: () => {
            push.success('Verification link sent!');
            history.back();
        },
        onError: throwAxiosError,
        onErrors: pushErrorMessages,
    });
};

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
);
</script>

<template>
    <AuthLayout
        form-title="Email Verification"
        title="Verify Your Email Address"
        subtitle="Please verify your email to continue."
        description="We have sent you a verification link to your email. Please check your inbox and click the link to verify your email address. If you didn't receive the email, you can request a new one."
    >
        <Head title="Email Verification" />

        <div class="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
                Thanks for signing up! Before getting started, please verify
                your email address by clicking on the link we just emailed to
                you. If you didn’t receive the email, we can send you another.
            </p>

            <!-- Success Message -->
            <div
                class="text-sm font-medium text-green-600 dark:text-green-400"
                v-if="verificationLinkSent"
            >
                A new verification link has been sent to the email address you
                provided during registration.
            </div>
        </div>

        <form @submit.prevent="submit">
            <div class="mt-4 flex items-center justify-between">
                <!-- Resend Verification Button -->
                <Button
                    :disabled="form.processing"
                    :loading="form.processing"
                    type="submit"
                    class="w-full"
                >
                    Resend Verification Email
                </Button>

                <!-- Logout Link -->
                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                    Log Out
                </Link>
            </div>
        </form>
    </AuthLayout>
</template>
