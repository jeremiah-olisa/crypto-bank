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

export interface ICurrencyItem {
    id: number;
    name: string;
    code: string;
    category: string;
    created_at: string;
    status: string;
    rate: number;
    price: number;
};

export interface IPaginatedData {
    path: string;
    per_page: number;
    next_cursor: string | null;
    next_page_url: string | null;
    prev_cursor: string | null;
    prev_page_url: string | null;
}
