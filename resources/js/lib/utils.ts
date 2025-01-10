import { type ClassValue, clsx } from 'clsx';
import { push } from 'notivue';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const pushErrorMessages = (error: Record<string, string>) => {
    for (const key in error) {
        if (Object.prototype.hasOwnProperty.call(error, key)) {
            // Get the error message from each property (assuming each is an error)
            const errorMessage = error[key] ?? 'An Error Occurred';

            // Log the error or push it to the error handler
            push.error(errorMessage);
        }
    }
}