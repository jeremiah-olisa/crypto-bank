import { useFormHandler } from './useFormHandler';

export default () => {
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
