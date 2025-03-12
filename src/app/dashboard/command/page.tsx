'use client';

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '@/components/ui/command';
import {
    Calendar,
    Smile,
    Calculator,
    User,
    CreditCard,
    Settings,
    ArrowLeft,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Page = () => {
    const [open, setOpen] = useState(false);
    const [submenu, setSubmenu] = useState<string | null>(null); // Controla el submenú activo

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    // Opciones principales
    const menuItems = [
        {
            label: 'Calendar',
            icon: <Calendar />,
            action: () => console.log('Calendar selected'),
        },
        {
            label: 'Search Emoji',
            icon: <Smile />,
            action: () => console.log('Emoji selected'),
        },
        { label: 'Calculator', icon: <Calculator />, disabled: true },
        { label: 'Settings', icon: <Settings />, submenu: 'settings' }, // Tiene submenú
    ];

    // Subopciones del menú "Settings"
    const settingsSubmenu = [
        { label: 'Profile', icon: <User />, shortcut: '⌘P' },
        { label: 'Billing', icon: <CreditCard />, shortcut: '⌘B' },
        { label: 'General Settings', icon: <Settings />, shortcut: '⌘S' },
    ];

    return (
        <div>
            <div className='mt-10 h-[200px] flex items-center justify-center space-x-2'>
                <p className='text-sm text-muted-foreground'>
                    Press{' '}
                    <kbd className='inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] font-medium'>
                        <span className='text-xs'>⌘</span>J
                    </kbd>{' '}
                    or{' '}
                    <kbd className='inline-flex h-5 items-center rounded border bg-muted px-1.5 font-mono text-[10px] font-medium'>
                        <span className='text-xs'>CTRL</span> + J
                    </kbd>
                </p>
            </div>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder='Type a command or search...' />
                <CommandList className='h-[400px]'>
                    <CommandEmpty>No results found.</CommandEmpty>

                    {/* Verifica si hay un submenú activo */}
                    {submenu === null ? (
                        <>
                            <CommandGroup heading='Main Menu'>
                                {menuItems.map((item) => (
                                    <CommandItem
                                        key={item.label}
                                        onSelect={() =>
                                            item.submenu
                                                ? setSubmenu(item.submenu)
                                                : item.action?.()
                                        }
                                        disabled={item.disabled}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </>
                    ) : (
                        <>
                            {/* Botón para regresar al menú principal */}
                            <CommandGroup heading='Settings'>
                                <CommandItem onSelect={() => setSubmenu(null)}>
                                    <ArrowLeft />
                                    <span>Back</span>
                                </CommandItem>

                                {settingsSubmenu.map((item) => (
                                    <CommandItem key={item.label}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                        {item.shortcut && (
                                            <CommandShortcut>
                                                {item.shortcut}
                                            </CommandShortcut>
                                        )}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </>
                    )}
                </CommandList>
            </CommandDialog>
        </div>
    );
};

export default Page;
