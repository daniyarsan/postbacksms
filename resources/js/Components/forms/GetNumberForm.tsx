import React, {useContext, useEffect} from 'react';
import {Form} from '@/Components/ui/form';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {router, useForm as useInertiaForm} from '@inertiajs/react';
import {Button} from '@/Components/ui/button';
import {usePage} from "@inertiajs/react";

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
import {GetNumberSchema} from "@/types/schema";
import {GetNumberPageProps, Option, PageProps} from "@/types";

type GetNumberFormProps = {
    countries: Option[]
    services: Option[]
}

export default function GetNumberForm({countries, services}: GetNumberFormProps) {
    const { props }: { props: GetNumberPageProps } = usePage();

    const form = useForm<z.infer<typeof GetNumberSchema>>({
        resolver: zodResolver(GetNumberSchema),
        defaultValues: {
            country: '',
            service: '',
            rent_time: '',
        },
    });

    const {setData, get, data} = useInertiaForm({
        country: '',
        service: '',
        rent_time: '',
    });

    const formValues = form.watch();

    useEffect(() => {
        // Only update Inertia form data if form values differ
        if (JSON.stringify(formValues) !== JSON.stringify(data)) {
            setData(formValues);
        }
    }, [formValues, data, setData]);

    function onSubmit() {
        get(route('getNumber'), {
            onSuccess: (resp) => {
                console.log(resp)
            },
            onError: (errors) => {
                console.error('Validation errors:', errors);
            },
            onFinish: () => {
                console.log('Request finished');
            },
        });
    }

    return (
        <div>
            {props.data && (
                <div className="flex flex-col bg-gray-300 p-5 gap-3 rounded-lg my-5">
                    <div className="">Your number: {props.data.number}</div>
                    <div className="">Your activation:{props.data.activation}</div>
                </div>
            )}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>

                    <FormField
                        control={form.control}
                        name="country" // Name of the form field
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel
                                        className="text-xs leading-6 text-gray-400 flex flex-row items-center gap-3">
                                        Country
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={(value) => field.onChange(value)} // Sync with React Hook Form
                                            value={field.value} // Controlled value
                                            defaultValue=""
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose country"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {countries.map((item) => (
                                                        <SelectItem
                                                            key={item.value}
                                                            value={item.value.toString()}
                                                            className="cursor-pointer"
                                                        >
                                                            {item.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>

                                    <FormMessage className="text-xs text-red-400"/>
                                </FormItem>
                            );
                        }}
                    />


                    <FormField
                        control={form.control}
                        name="service" // Name of the form field
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel
                                        className="text-xs leading-6 text-gray-400 flex flex-row items-center gap-3">
                                        Service
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={(value) => field.onChange(value)} // Sync with React Hook Form
                                            value={field.value} // Controlled value
                                            defaultValue=""
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose service"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {services.map((item) => (
                                                        <SelectItem
                                                            key={item.value}
                                                            value={item.value.toString()}
                                                            className="cursor-pointer"
                                                        >
                                                            {item.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>

                                    <FormMessage className="text-xs text-red-400"/>
                                </FormItem>
                            );
                        }}
                    />

                    <FormField
                        control={form.control}
                        name='rent_time'
                        render={({field}) => {
                            return (
                                <FormItem>
                                    <FormLabel
                                        className='text-xs leading-6 text-gray-400 flex flex-row items-center gap-3'>
                                        Rent time
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='text'
                                            placeholder="hours..."
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
        </div>
    );

}
