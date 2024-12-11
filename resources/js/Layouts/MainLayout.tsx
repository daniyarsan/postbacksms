import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, usePage} from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import {PageProps} from "@/types";
import AlertError from "@/Components/alerts/AlertError";
import AlertSuccess from "@/Components/alerts/AlertSuccess";

export default function MainLayout({ children }: PropsWithChildren) {
    const { errors, success } = usePage<PageProps>().props;

    return (
        <div
            className='flex items-center justify-center min-h-screen from-stone-400 via-stone-700 to-stone-900 bg-gradient-to-br'>
            <div className="flex flex-col">
                <AlertError errors={errors}/>
                <AlertSuccess message={success}/>
                {children}
            </div>
        </div>
    );
}
