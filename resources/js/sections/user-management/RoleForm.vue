<script setup lang="ts">
import FormHelpDescription from '@/components/form/FormHelpDescription.vue';
import TextField from '@/components/form/TextField.vue';
import InputError from '@/components/InputError.vue';
import Button from '@/components/ui/button/Button.vue';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Table from '@/components/ui/table/Table.vue';
import TableBody from '@/components/ui/table/TableBody.vue';
import TableCell from '@/components/ui/table/TableCell.vue';
import TableHead from '@/components/ui/table/TableHead.vue';
import TableHeader from '@/components/ui/table/TableHeader.vue';
import TableRow from '@/components/ui/table/TableRow.vue';
import { pushErrorMessages, throwAxiosError } from '@/lib/utils';
import useTokenedForm from '@/hooks/useTokenedForm';
import { push } from 'notivue';
import { computed } from 'vue';
import * as yup from 'yup';
const props = defineProps<{ role?: any }>();

const isUpdate = computed(() => !!props?.role);

const permissions = [
    { id: 1, name: 'View Users', description: 'Allows viewing the user list.' },
    { id: 2, name: 'Edit Users', description: 'Allows editing user details.' },
    {
        id: 3,
        name: 'Delete Users',
        description: 'Allows deleting user accounts.',
    },
    {
        id: 4,
        name: 'Manage Roles',
        description: 'Allows managing roles and permissions.',
    },
];

const validationSchema = yup.object({
    name: yup.string().required('Role Name is required'),
    description: yup.string().required('Role Description is required'),
    permissions: yup.array().required('Role Permission is required'),
});

const form = useTokenedForm(
    {
        name: '',
        description: '',
        permissions: permissions.map((perm) => ({
            id: perm.id,
            granted: false,
        })),
    },
    validationSchema
);

const submit = () => {
    form.validate();

    if (form.hasErrors) return;

    form.post('/roles', {
        onSuccess: () => {
            form.reset();
            push.success('Role created successfully');
        },
        onError: throwAxiosError,
        onErrors: pushErrorMessages,
    });
};
</script>

<template>
    <form
        id="role-form"
        @submit.prevent="submit"
        class="mb-4 grid grid-cols-2 gap-x-5 gap-y-5"
    >
        <!-- Role Name -->
        <TextField
            id="name"
            name="name"
            label="Role Name"
            placeholder="Enter role name"
            :error-message="form.errors.name"
        />

        <!-- Role Description -->
        <TextField
            id="description"
            name="description"
            label="Role Description"
            placeholder="Enter role description"
            :error-message="form.errors.description"
        />

        <!-- Permissions -->
        <div class="col-span-2 flex flex-col gap-3">
            <Label class="mb-2 block text-base font-medium">Permissions</Label>
            <div class="overflow-x-auto">
                <Table>
                    <TableHeader class="bg-primary-foreground">
                        <TableRow>
                            <TableHead class="text-left">Permission</TableHead>
                            <TableHead class="text-left">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                            v-for="(permission, index) in permissions"
                            :key="permission.id"
                            :class="
                                index % 2 === 0
                                    ? 'bg-secondary dark:bg-hover'
                                    : ''
                            "
                        >
                            <TableCell class="flex gap-3"
                                >{{ permission.name }}
                                <FormHelpDescription
                                    v-if="permission.description"
                                    align="end"
                                    :description="permission.description"
                            /></TableCell>
                            <TableCell>
                                <Switch
                                    :id="`permission-${permission.id}`"
                                    :checked="
                                        form.permissions.find(
                                            (p) => p.id === permission.id,
                                        )?.granted
                                    "
                                    @update:checked="
                                        (granted) => {
                                            const perm = form.permissions.find(
                                                (p) => p.id === permission.id,
                                            );
                                            if (perm) perm.granted = granted;
                                        }
                                    "
                                />
                            </TableCell>
                        </TableRow>
                        <InputError :message="form.errors.permissions" />
                    </TableBody>
                </Table>
            </div>
        </div>
    </form>
    <!-- Submit Button -->
    <Button
        type="submit"
        form="role-form"
        :loading="form.processing"
        :disabled="form.processing"
    >
        {{ isUpdate ? 'Update' : 'Create' }} Role
    </Button>
</template>
