export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    errors: Errors & ErrorBag;
    success: string;
};


type GetNumberPageProps = PageProps<{ data: { number: string | number, activation: string | number } }>
type CancelNumberPageProps = PageProps<{ data: { number: string | number, activation: string | number } }>
type GetSmsPageProps = PageProps<{ data: { number: string | number, activation: string | number } }>
type GetStatusPageProps = PageProps<{ data: { number: string | number, activation: string | number } }>

export type Option = {
    label: string
    value: string
}
