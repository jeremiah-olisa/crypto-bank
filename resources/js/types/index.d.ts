export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    profile_image?: string;
}

export interface AppDetails {
    name: string;
    env: string;
    debug: string;
    isProduction: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    app: AppDetails;
};
