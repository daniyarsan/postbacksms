import React, {useContext, useEffect} from 'react';
import {Form} from '@/Components/ui/form';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {router, useForm as useInertiaForm} from '@inertiajs/react';
import {Button} from '@/Components/ui/button';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/Components/ui/form';
import {Input} from '@/Components/ui/input';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';

import {z} from 'zod';
import {ActivationSchema, GetNumberSchema} from "@/types/schema";
import {Option} from "@/types";


export default function GetStatusForm() {

    const form = useForm<z.infer<typeof ActivationSchema>>({
        resolver: zodResolver(ActivationSchema),
        defaultValues: {
            activation: '',
        },
    });

    const {setData, get, data} = useInertiaForm({
        activation: '',
    });

    const formValues = form.watch();

    useEffect(() => {
        // Only update Inertia form data if form values differ
        if (JSON.stringify(formValues) !== JSON.stringify(data)) {
            setData(formValues);
        }
    }, [formValues, data, setData]);

    function onSubmit() {
        get(route('getStatus'));
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>

                <FormField
                    control={form.control}
                    name='activation'
                    render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel className='text-xs leading-6 text-gray-400 flex flex-row items-center gap-3'>
                                    Rent time
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type='text'
                                        placeholder=""
                                    />
                                </FormControl>

                                <FormMessage className='text-xs text-red-400'/>
                            </FormItem>
                        );
                    }}
                />


                <Button className='bg-primary'>Отправить</Button>
            </form>
        </Form>
    );

}
