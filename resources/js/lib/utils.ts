import { AxiosError } from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { push } from 'notivue';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// export const pushErrorMessages = (error: Record<string, string>, blackListObj?: Record<string, string>) => {
//     for (const key in error) {
//         if (Object.prototype.hasOwnProperty.call(error, key)) {
//             // Get the error message from each property (assuming each is an error)
//             const errorMessage = error[key] ?? 'An Error Occurred';

//             // Log the error or push it to the error handler
//             push.error(errorMessage);
//         }
//     }
// };

export const pushErrorMessages = (
    error: Record<string, string>,
    blackListObj?: Record<string, any>,
) => {
    for (const key in error) {
        if (Object.prototype.hasOwnProperty.call(error, key)) {
            // Check if the key is not in the blackListObj
            if (
                !blackListObj ||
                !Object.prototype.hasOwnProperty.call(blackListObj, key)
            ) {
                // Get the error message from each property (assuming each is an error)
                const errorMessage = error[key] ?? 'An Error Occurred';

                // Log the error or push it to the error handler
                push.error(errorMessage);
            }
        }
    }
};

export const throwAxiosError = (error: AxiosError<any, any>) => {
    push.error(
        error.response?.data?.message ?? error.message ?? 'An Error Occurred',
    );
    // push.error('Invalid credentials');
};
