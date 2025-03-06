/*/// esto es para evitar error con nest  */
"use client"

import { Button } from '@/components/ui/button';
import { ChevronRightIcon, Loader2, MailOpen } from 'lucide-react';
import React from 'react';

const page = () => {
    return (
        <div className='grid grid-cols-5 gap-2'>
            {/*/// Botones normales  */}
            <Button>default</Button>
            <Button variant={'destructive'}>destructive</Button>
            <Button variant={'ghost'}>ghost</Button>
            <Button variant={'link'}>link</Button>
            <Button variant={'outline'}>outline</Button>
            <Button variant={'secondary'}>secondary</Button>
            <Button disabled> disabled </Button>
            <Button onClick={() => console.log('Hola mundo')}>
                {' '}
                Click Me{' '}
            </Button>
            <Button variant={'secondary'}>
                {' '}
                success{' '}
            </Button>

            {/*/// Botón de icono  */}
            <Button variant={'outline'} size={'icon'}>
                <ChevronRightIcon className='h-4 w-4' />
            </Button>

            {/* /// Icono con texto */}
            <Button>
                <MailOpen /> Login with Email
            </Button>

            {/* /// Botón con carga */}
            <Button disabled>
                <Loader2 className='animate-spin' />
                Please wait
            </Button>
        </div>
    );
};

export default page;
