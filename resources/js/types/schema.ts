import * as z from 'zod';


export const GetNumberSchema = z.object({
    country: z.string().min(1, {
        message: 'Must be at least 2 characters.',
    }),
    service: z.string().min(1, {
        message: 'Required field',
    }),
    rent_time: z.string(),
});

export const ActivationSchema = z.object({
    activation: z.string().min(1, {
        message: 'Field is required',
    }),
});
