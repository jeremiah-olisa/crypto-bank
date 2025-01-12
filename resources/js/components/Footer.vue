<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card' /* PartiallyEnd: #3632/scriptSetup.vue */ /* PartiallyEnd: #3632/scriptSetup.vue */; /* PartiallyEnd: #3632/scriptSetup.vue */
</script>

<template>
    <Card
        class="col-span-full flex flex-col items-center justify-between gap-4 px-6 md:flex-row"
    >
        <div class="py-6 text-center md:text-start">
            <p class="text-2xl font-semibold">Buy UKO & Get 15% Off</p>
            <p class="mb-8 mt-1 text-sm font-normal text-muted">
                Well Designed Theme to make everything better
            </p>

            <Button class="px-12">Buy Now</Button>
        </div>

        <div class="mt-6 w-full md:w-[300px]">
            <img
                alt="footer illustration"
                src="/images/illustration/Illustration-2.svg"
                class="w-full"
            />
        </div>
    </Card>
</template>
