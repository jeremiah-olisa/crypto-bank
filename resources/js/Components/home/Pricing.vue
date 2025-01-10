<script setup lang="ts">
import { BuildingIcon, CheckIcon, CrownIcon, StarIcon } from 'lucide-vue-next';
</script>
<template>
    <section id="pricing" class="bg-background px-4 py-20">
        <div class="container mx-auto text-center">
            <span class="text-sm font-medium text-primary">Pricing</span>
            <h2 class="mt-6 text-4xl font-bold">
                Simple
                <br />
                Transparent <span class="text-primary">Pricing</span>
            </h2>

            <div class="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
                <!-- Basic Plan -->
                <div class="rounded-2xl border border-border bg-card p-6">
                    <div
                        class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                    >
                        <StarIcon class="h-6 w-6 text-primary" />
                    </div>
                    <h3 class="mb-4 text-xl font-semibold">Basic Plan</h3>
                    <ul class="mb-6 space-y-3 text-left">
                        <li class="flex items-center">
                            <CheckIcon class="mr-2 h-5 w-5 text-success" />
                            <span>Essential trading features</span>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="mr-2 h-5 w-5 text-success" />
                            <span>2-factor authentication</span>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="mr-2 h-5 w-5 text-success" />
                            <span>Access to global payments</span>
                        </li>
                    </ul>
                    <button
                        class="w-full rounded-lg bg-primary py-2 text-white transition-colors hover:bg-primary-dark"
                    >
                        Join Now
                    </button>
                </div>

                <!-- Premium Plan -->
                <div
                    class="rounded-2xl bg-gradient-to-br from-primary to-info p-[2px]"
                >
                    <div class="h-full rounded-2xl bg-card p-6">
                        <div
                            class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-info-light"
                        >
                            <CrownIcon class="h-6 w-6 text-info" />
                        </div>
                        <h3 class="mb-4 text-xl font-semibold">Premium Plan</h3>
                        <ul class="mb-6 space-y-3 text-left">
                            <li class="flex items-center">
                                <CheckIcon class="mr-2 h-5 w-5 text-success" />
                                <span>Everything in Basic, plus</span>
                            </li>
                            <li class="flex items-center">
                                <CheckIcon class="mr-2 h-5 w-5 text-success" />
                                <span>Priority customer support</span>
                            </li>
                            <li class="flex items-center">
                                <CheckIcon class="mr-2 h-5 w-5 text-success" />
                                <span>Advanced trading features</span>
                            </li>
                        </ul>
                        <button
                            class="w-full rounded-lg bg-primary py-2 text-white transition-colors hover:bg-primary-dark"
                        >
                            Join Now
                        </button>
                    </div>
                </div>

                <!-- Business Plan -->
                <div class="rounded-2xl border border-border bg-card p-6">
                    <div
                        class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-warning-light"
                    >
                        <BuildingIcon class="h-6 w-6 text-warning" />
                    </div>
                    <h3 class="mb-4 text-xl font-semibold">Business Plan</h3>
                    <ul class="mb-6 space-y-3 text-left">
                        <li class="flex items-center">
                            <CheckIcon class="mr-2 h-5 w-5 text-success" />
                            <span>All Premium Plan features</span>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="mr-2 h-5 w-5 text-success" />
                            <span>Multi-user access</span>
                        </li>
                        <li class="flex items-center">
                            <CheckIcon class="mr-2 h-5 w-5 text-success" />
                            <span>Custom solutions</span>
                        </li>
                    </ul>
                    <button
                        class="w-full rounded-lg bg-primary py-2 text-white transition-colors hover:bg-primary-dark"
                    >
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
