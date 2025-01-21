import { pushErrorMessages } from '@/lib/utils';
import { VisitOptions } from '@inertiajs/core';
import { useForm } from '@inertiajs/vue3';
import { NotificationClearMethods, push, PushPromiseReturn } from 'notivue';

interface UseFormHandlerOptions<T> {
    defaultValues: T;
    route: string;
    method?: 'post' | 'put' | 'patch' | 'delete';
    messages?: {
        pending?: string;
        success?: string;
        error?: string;
    };
    meta?: (
        notification: NotificationClearMethods & PushPromiseReturn,
    ) => Partial<VisitOptions>;
    onSuccess?: () => void;
    onError?: (errors: Record<string, string>) => void;
    manuallyHandleErrors?: boolean;
}

export function useFormHandler<T extends object>(
    options: UseFormHandlerOptions<T>,
) {
    const {
        defaultValues,
        route,
        method = 'post',
        messages = {
            pending: 'Processing your request...',
            success: 'Operation successful',
            error: 'An error occurred',
        },
        meta: metaOptions,
        onSuccess,
        onError,
        manuallyHandleErrors = false,
    } = options;

    const form = useForm<T>(defaultValues);

    const submit = () => {
        if (form.hasErrors) return;

        const notification = push.promise(String(messages?.pending));

        const defaultOptions: Partial<VisitOptions> = {
            onSuccess: () => {
                form.reset();
                notification.resolve(String(messages?.success));

                if (onSuccess) onSuccess();
            },
            onError: (errors: Record<string, string>) => {
                notification.reject(String(messages?.error));

                if (!manuallyHandleErrors)
                    pushErrorMessages(errors, defaultValues);

                if (onError) onError(errors);
            },
            showProgress: true,
        };

        const options: Partial<VisitOptions> = metaOptions
            ? metaOptions(notification)
            : defaultOptions;

        const formAction = form[method];
        formAction(route, options);
    };

    return { form, submit };
}
