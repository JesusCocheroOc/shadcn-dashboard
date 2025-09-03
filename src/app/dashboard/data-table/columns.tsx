'use client';

import { Badge } from '@/components/ui/badge';
import { Payment } from '@/data/payments.data';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'clientName',
        header: 'Client Name',
    },
    {
        accessorKey: 'amount',
        /*/// El header puede ser un elemento jsx  */
        header: () => <div className='text-right'>Amount</div>,
        /// podemos aplicar lógica sobre la columna directamente
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('amount'));
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount);

            return <div className='text-right font-medium'>{formatted}</div>;
        },
    },
    {
        accessorKey: 'status',
        header: 'Status',
        /// ejemplo de como renderizar un badge con un color diferente según el estado
        cell: ({ row }) => {
            const status = row.getValue('status') as string;
            const variant =
                {
                    pending: 'secondary',
                    processing: 'warning',
                    success: 'success',
                    failed: 'destructive',
                }[status] ?? ('default' as any);

            return (
                <Badge variant = {variant} className='capitalize'>
                    {status}
                </Badge>
            );
        },
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
];
