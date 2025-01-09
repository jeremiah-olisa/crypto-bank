<script setup lang="ts">
// SHADCN COMPONENTS
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '@/components/ui/command';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
// CUSTOM COMPONENTS
import Icon from '@/components/Icon.vue';
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <button>
                <Icon name="Search" class="stroke-muted" />
            </button>
        </DialogTrigger>

        <DialogContent class="border-0 p-0 shadow-none sm:max-w-screen-sm">
            <Command class="w-full rounded-lg border border-border">
                <CommandInput
                    placeholder="Type a command or search..."
                    class="my-2"
                />

                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandGroup heading="Suggestions">
                        <CommandItem value="Calendar">
                            <Icon name="Calendar" class="mr-2 h-4 w-4" />
                            <span>Calendar</span>
                        </CommandItem>

                        <CommandItem value="Search Emoji">
                            <Icon name="Smile" class="mr-2 h-4 w-4" />
                            <span>Search Emoji</span>
                        </CommandItem>

                        <CommandItem value="Calculator">
                            <Icon name="Calculator" class="mr-2 h-4 w-4" />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading="Settings">
                        <CommandItem value="Profile">
                            <Icon name="User" class="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>

                        <CommandItem value="Billing">
                            <Icon name="CreditCard" class="mr-2 h-4 w-4" />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>

                        <CommandItem value="Settings">
                            <Icon name="Settings" class="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </DialogContent>
    </Dialog>
</template>
