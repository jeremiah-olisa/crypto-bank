<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import BaseLayout from '@/Layouts/BaseLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { useDark, useToggle } from '@vueuse/core';
import {
    ChartNoAxesCombined,
    LogIn,
    MoonIcon,
    ShieldCheckIcon,
    SunIcon,
    UserPlus,
    WalletIcon,
} from 'lucide-vue-next';
import { ref } from 'vue';
const isDark = useDark();
const toggleDark = useToggle(isDark);

defineProps<{
    appName: string;
}>();

const currencies = ref([
    {
        name: 'USD',
        image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040',
    },
    {
        name: 'EUR',
        image: 'https://cryptologos.cc/logos/stasis-euro-eurs-logo.png?v=040',
    },
    {
        name: 'BTC',
        image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040',
    },
    {
        name: 'ETH',
        image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040',
    },
]);
</script>

<template>
    <BaseLayout>
        <Head title="Home" />
        <div
            :class="{ dark: isDark }"
            class="min-h-screen bg-background text-foreground"
        >
            <!-- Navigation -->
            <nav
                class="fixed z-50 w-full border-b border-border bg-card/80 backdrop-blur-sm"
            >
                <div class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-8">
                            <a
                                href="#"
                                class="text-2xl font-bold text-primary"
                                >{{ $props.appName }}</a
                            >
                            <div class="hidden space-x-6 md:flex">
                                <a
                                    href="#features"
                                    class="text-muted hover:text-foreground"
                                    >Features</a
                                >
                                <!-- <a
                                href="#company"
                                class="text-muted hover:text-foreground"
                                >Company</a
                            >
                            <a
                                href="#pricing"
                                class="text-muted hover:text-foreground"
                                >Pricing</a
                            >
                            <a
                                href="#business"
                                class="text-muted hover:text-foreground"
                                >Business</a
                            > -->
                            </div>
                        </div>
                        <Button
                            @click="toggleDark()"
                            class="rounded-full p-2 hover:bg-hover"
                        >
                            <SunIcon v-if="isDark" class="h-5 w-5" />
                            <MoonIcon v-else class="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <section class="px-4 pb-20 pt-32">
                <div class="container mx-auto max-w-4xl text-center">
                    <span class="text-sm font-medium text-primary"
                        >Welcome to {{ $props.appName }}</span
                    >
                    <h1
                        class="mt-6 text-5xl font-bold leading-tight md:text-6xl"
                    >
                        <span class="text-primary-dark">Effortless</span>
                        <br />
                        Crypto Trading Made
                        <span class="text-primary">Simple</span>
                    </h1>
                    <p class="mx-auto mt-6 max-w-2xl text-lg text-muted">
                        Experience seamless financial management, making crypto
                        trading and transfers easy and hassle-free
                    </p>
                    <div class="mt-8 flex justify-center space-x-4">
                        <Link
                            prefetch
                            class="action-btn-inverse"
                            :href="route('login')"
                        >
                            <LogIn class="h-5 w-5" />
                            <span>Login</span>
                        </Link>
                        <Link
                            prefetch
                            class="action-btn"
                            :href="route('register')"
                        >
                            <UserPlus class="h-5 w-5" />
                            <span>Get Started</span>
                        </Link>
                    </div>
                </div>

                <!-- Payment Partners -->
                <div
                    class="mt-20 flex items-center justify-center space-x-8 opacity-80"
                >
                    <img
                        v-for="(currency, index) in currencies"
                        :key="index"
                        :src="currency.image"
                        :alt="currency.name"
                        class="h-8"
                    />
                </div>
            </section>

            <!-- Features Section -->
            <section id="features" class="bg-gradient-2 px-4 py-20">
                <div class="container mx-auto">
                    <span class="text-sm font-medium text-primary"
                        >Features</span
                    >
                    <h2 class="mt-6 text-4xl font-bold">
                        Crypto Trading,
                        <br />
                        <span class="text-primary">Tailored for You</span>
                    </h2>

                    <div class="mt-12 grid gap-8 md:grid-cols-3">
                        <div
                            class="rounded-2xl bg-card p-6 transition-shadow hover:shadow-lg"
                        >
                            <div
                                class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                            >
                                <ChartNoAxesCombined
                                    class="h-6 w-6 text-primary"
                                />
                            </div>
                            <h3 class="mb-2 text-xl font-semibold">
                                Smart Insights
                            </h3>
                            <p class="text-muted">
                                Advanced analytics and tracking for your crypto
                                portfolio
                            </p>
                        </div>

                        <div
                            class="rounded-2xl bg-card p-6 transition-shadow hover:shadow-lg"
                        >
                            <div
                                class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-light"
                            >
                                <ShieldCheckIcon class="h-6 w-6 text-success" />
                            </div>
                            <h3 class="mb-2 text-xl font-semibold">
                                Advanced Security
                            </h3>
                            <p class="text-muted">
                                Enterprise-grade security for your digital
                                assets
                            </p>
                        </div>

                        <div
                            class="rounded-2xl bg-card p-6 transition-shadow hover:shadow-lg"
                        >
                            <div
                                class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-warning-light"
                            >
                                <WalletIcon class="h-6 w-6 text-warning" />
                            </div>
                            <h3 class="mb-2 text-xl font-semibold">
                                Global Payments
                            </h3>
                            <p class="text-muted">
                                Seamless crypto transactions worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Pricing Section -->

            <!-- CTA Section -->
            <section class="bg-gradient-2 px-4 py-20">
                <div class="container mx-auto text-center">
                    <h2 class="text-4xl font-bold">
                        Ready to
                        <br />
                        Experience <span class="text-primary">the Future</span>
                    </h2>
                    <p class="mx-auto mt-6 max-w-2xl text-lg text-muted">
                        Join thousands of users and take control of your
                        financial future with {{ $props.appName }}'s innovative
                        solutions
                    </p>
                    <Button
                        class="mt-8 rounded-lg border border-primary bg-card px-8 py-3 text-card-foreground transition-colors hover:bg-primary-dark dark:border-card"
                    >
                        <img
                            src="https://www.freepnglogos.com/uploads/telegram-logo-png-0.png"
                            class="mr-2 size-5 object-cover object-center"
                        />
                        Get Connected Now
                    </Button>
                </div>
            </section>
        </div>
    </BaseLayout>
</template>

<style scoped>
.action-btn {
    @apply flex items-center space-x-2 rounded-lg border border-border bg-card px-6 py-2 text-card-foreground hover:bg-hover;
}
.action-btn-inverse {
    @apply flex items-center space-x-2 rounded-lg border border-card bg-foreground px-6 py-2 text-card hover:bg-primary hover:text-card-foreground hover:dark:bg-card;
}
</style>
