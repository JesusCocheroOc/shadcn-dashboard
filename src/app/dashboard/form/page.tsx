'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

/// 1. Agregar validaciones y permitir un arreglo de usernames
const formSchema = z.object({
    username: z.string().min(2).max(20),
    email: z.string().email(),
    usernames: z.array(z.string().min(2).max(20)).min(1), // Definimos el array de usernames
});

const Page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: '',
            usernames: [''], // Inicializamos con un username
        },
    });

    // useFieldArray para manejar los campos dinámicos
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'usernames', // El nombre del campo es 'usernames' en el esquema
    });

    // 2. Define un manejador de submit
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Este es el manejador de envío del formulario
        console.log(values);
    };

    return (
        <div className='p-8'>
            {/* Formulario de React Hook Form */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='grid grid-cols-2 gap-4'
                >
                    {/* Username */}
                    <FormField
                        control={form.control}
                        name='username'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder='shadcn' {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type='email'
                                        placeholder='email'
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your public display email.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Campos dinámicos de username */}
                    {fields.map((item, index) => (
                        <FormField
                            key={item.id}
                            control={form.control}
                            name={`usernames.${index}`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username {index + 1}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={`Username ${
                                                index + 1
                                            }`}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    {/* Botón para eliminar el campo */}
                                    <Button
                                        type='button'
                                        onClick={() => remove(index)}
                                    >
                                        Remove Username {index + 1}
                                    </Button>
                                </FormItem>
                            )}
                        />
                    ))}

                    {/* Botón para agregar más campos dinámicos */}
                    <Button type='button' onClick={() => append('')}>
                        Add Username
                    </Button>

                    {/* Submit */}
                    <Button type='submit'>Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default Page;
