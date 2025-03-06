'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const page = () => {

    /// 1) Estado
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className='grid grid-cols-2 gap-3.5'>
            {/*/// onOpenChange con esto sabemos si esta abierto o oculto el modal  */}
            <AlertDialog
                /*/// controlar el modal con un estado  */
                open={dialogOpen}
                onOpenChange={(open) => {

                    // asignar la referencia para los botones de cancel y etc
                    setDialogOpen(open);
                    console.log({ open })
                }}
            >
                <AlertDialogTrigger>
                    <Button> Open Modal </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel
                            onClick={() => console.log('cancel')}
                        >
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => console.log('Continue')}
                        >
                            Continue
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            
            {/*/// botón externo  */}
            <Button variant='ghost' onClick={() => setDialogOpen(true)}>
                {' '}
                Abrir con el estado{' '}
            </Button>
        </div>
    );
};

export default page;
