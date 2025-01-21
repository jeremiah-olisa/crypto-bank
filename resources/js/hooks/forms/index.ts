import { IStoreCurrencyForm } from '@/types/currency';
import { useFormHandler } from './useFormHandler';

export const useLoginForm = () => {
    const defaultValues = {
        email: '',
        password: '',
        remember: false,
    };

    return useFormHandler({
        defaultValues,
        route: route('login'),
        messages: {
            pending: 'Please wait while we log you in',
            success: 'Login successful',
            error: 'Error logging in',
        },
    });
};

export const useRegisterForm = () => {
    const defaultValues = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    };

    return useFormHandler({
        defaultValues,
        route: route('register'),
        messages: {
            pending: 'Please wait while we create an account for you',
            success: 'User registered successfully',
            error: 'Error registering user',
        },
    });
};

export const useListNewCurrencyForm = (
    defaultValues = {
        name: '',
        code: '',
        category: '',
        rate: NaN,
        image_url: '',
        is_published: true, // Default to active
    } as IStoreCurrencyForm,
) => {
    return useFormHandler({
        defaultValues,
        route: route('currency.store'),
        messages: {
            pending: 'Adding New Currency',
            success: 'New Currency listed successfully',
            error: 'Failed to add new currency',
        },
    });
};

export const useUpdateCurrencyForm = (defaultValues: IStoreCurrencyForm) => {
    return useFormHandler({
        defaultValues,
        route: route('currency.update'),
        messages: {
            pending: 'Updating Currency',
            success: 'Currency updated successfully',
            error: 'Failed to updatew currency',
        },
    });
};
