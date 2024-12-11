import {Option, PageProps} from '@/types';
import {Head, Link} from '@inertiajs/react';

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/Components/ui/tabs"
import GetNumberForm from "@/Components/forms/GetNumberForm";
import GetSmsForm from "@/Components/forms/GetSmsForm";
import CancelNumberForm from "@/Components/forms/CancelNumberForm";
import GetStatusForm from "@/Components/forms/GetStatusForm";
import MainLayout from "@/Layouts/MainLayout";

type HomeProps = {
    countries: Option[]
    services: Option[]
}

export default function Home({countries, services}: HomeProps) {

    return (
        <MainLayout>

            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl min-h-[450px]'>
                <Tabs defaultValue="get-number" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="get-number">Get Number</TabsTrigger>
                        <TabsTrigger value="get-sms">Get SMS</TabsTrigger>
                        <TabsTrigger value="cancel-number">Cancel Number</TabsTrigger>
                        <TabsTrigger value="get-status">Get Status</TabsTrigger>
                    </TabsList>
                    <TabsContent value="get-number"><GetNumberForm countries={countries}
                                                                   services={services}/></TabsContent>
                    <TabsContent value="get-sms"><GetSmsForm/></TabsContent>
                    <TabsContent value="cancel-number"><CancelNumberForm/></TabsContent>
                    <TabsContent value="get-status"><GetStatusForm/></TabsContent>
                </Tabs>

            </div>
        </MainLayout>
    );
}
