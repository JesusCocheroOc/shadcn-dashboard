'use client';

import { useState } from 'react';

import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

/// lista de opciones
const frameworks = [
    {
        value: 'next.js',
        label: 'Next.js',
    },
    {
        value: 'sveltekit',
        label: 'SvelteKit',
    },
    {
        value: 'nuxt.js',
        label: 'Nuxt.js',
    },
    {
        value: 'remix',
        label: 'Remix',
    },
    {
        value: 'astro',
        label: 'Astro',
    },
];

type Status = {
    value: string;
    label: string;
};

/// lista de opciones para el ejercicio n2
const statuses: Status[] = [
    {
        value: 'backlog',
        label: 'Backlog',
    },
    {
        value: 'todo',
        label: 'Todo',
    },
    {
        value: 'in progress',
        label: 'In Progress',
    },
    {
        value: 'done',
        label: 'Done',
    },
    {
        value: 'canceled',
        label: 'Canceled',
    },
];

const page = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    /// estado para el ejercicio n2
    const [openLateral, setOpenLateral] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

    return (
        <div className='flex flex-row  gap-4 p-4 bg-gray-100 rounded-lg'>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className='w-[200px] justify-between'
                    >
                        {value
                            ? frameworks.find(
                                  (framework) => framework.value === value
                              )?.label
                            : 'Select framework...'}
                        <ChevronsUpDown className='opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                    <Command>
                        <CommandInput
                            placeholder='Search framework...'
                            className='h-9'
                        />
                        {/*/// este es el comando que contiene las lista de opciones */}
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(
                                                currentValue === value
                                                    ? ''
                                                    : currentValue
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        {framework.label}
                                        <Check
                                            className={cn(
                                                'ml-auto',
                                                value === framework.value
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        
            {/*/// Componente de opciones en el lateral ejercicio n2*/}
            <div className='flex items-center space-x-4'>
                <p className='text-sm text-muted-foreground'>Status</p>
                <Popover open={openLateral} onOpenChange={setOpenLateral}>
                    <PopoverTrigger asChild>
                        <Button
                            variant='outline'
                            className='w-[150px] justify-start'
                        >
                            {selectedStatus ? (
                                <>{selectedStatus.label}</>
                            ) : (
                                <>+ Set status</>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className='p-0' side='right' align='start'>
                        <Command>
                            <CommandInput placeholder='Change status...' />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup>
                                    {statuses.map((status) => (
                                        <CommandItem
                                            key={status.value}
                                            value={status.value}
                                            onSelect={(value) => {
                                                setSelectedStatus(
                                                    statuses.find(
                                                        (priority) =>
                                                            priority.value ===
                                                            value
                                                    ) || null
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            {status.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default page;
