'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const page = () => {
    return (
        <div className='grid grid-cols-12 gap-2'>
            {'123456789'.split('').map((item) => (
                <Card key={item} className='col-span-4 sm:col-span-3'>
                    <CardHeader>
                        <CardTitle>{`Card Title ${item}`}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    {/*/// Podemos personalizar como deseemos, ponerle clases y botones  */}
                    <CardFooter className='flex justify-between'>
                        <Button variant={'ghost'}> Info </Button>
                        <Button> Mas info </Button>
                    </CardFooter>
                </Card>
            ))}

            <Card className='col-span-12'>
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                        Deploy your new project in one-click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className='grid w-full items-center gap-4'>
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor='name'>Name</Label>
                                <Input
                                    id='name'
                                    placeholder='Name of your project'
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <Button variant='outline'>Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default page;
