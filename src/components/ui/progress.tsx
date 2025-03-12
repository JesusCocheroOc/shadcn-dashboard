"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

/// 1) Usualmente las props están por aca, pero en este caso nos toca expandirlas
// Extender las props con nuestra interfaz personalizada
interface CustomProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  indicatorColor?: string;
}

function Progress({
    className,
    value,
    indicatorColor = 'bg-primary', /// 2. Color por defecto
    ...props
}: CustomProps) {
    return (
        <ProgressPrimitive.Root
            data-slot='progress'
            className={cn(
                'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                data-slot='progress-indicator'
                /*/// 3. pasar la clase dinamicamente  */
                className={
                  cn('bg-primary h-full w-full flex-1 transition-all', indicatorColor)
                }
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress }
