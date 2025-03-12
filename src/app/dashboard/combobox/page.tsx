'use client';

import { AvatarFallback, Avatar, AvatarImage } from '@/components/ui/avatar';

const page = () => {
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <Avatar>
                {/*/// la imagen */}
                <AvatarImage
                    src='https://github.com/shadcn.pngimagenrota'
                    alt='@shadcn'
                />

                {/*/// Si falla la imagen muestra este nombre de usuario */}
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default page;
