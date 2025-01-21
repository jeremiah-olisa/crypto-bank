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
