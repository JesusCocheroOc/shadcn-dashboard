'use client';

import React from 'react';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const HomePage = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            <Button
                variant='outline'
                onClick={() =>
                    toast('Event has been created', {
                        /// el contenido que queremos mostrar
                        description: 'Sunday, December 03, 2023 at 9:00 AM',
                        duration: 3000,
                        position: 'top-right',
                        action: {
                            label: 'Undo',
                            /// lo que hacemos al darle chick
                            onClick: () => console.log('Undo'),
                        },
                    })
                }
            >
                Show Toast
            </Button>

            {/* /// ejercicio 02 */}
            <Button
                variant='outline'
                onClick={() =>
                    /// este es tipo success
                    toast.success('Event has been created', {
                        description: 'Sunday, December 03, 2023 at 9:00 AM',
                        /// si configuramos los colores podemos pasar el classname
                        className: 'bg-blue-500 text-white',
                        duration: 3000,
                        action: {
                            label: 'Undo',
                            onClick: () => console.log('Undo'),
                        },
                    })
                }
            >
                Show Toast Success
            </Button>
        </div>
    );
};

export default HomePage;
