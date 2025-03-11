'use client';

import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';


const CalendarPage = () => {

    const [date, setDate] = useState(new Date());

    ///2.1 almacenar multiples fechas seleccionadas
    const [multiplesDates, setMultiplesDates] = useState([]);


    /// mostrar la fecha formateada
    const smallDate = date?.toLocaleDateString("es-ES", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className='flex flex-col sm:flex sm:flex-wrap   sm:flex-row gap-4'>
            <Calendar
                mode='single'
                selected={date}
                onSelect={setDate}
                className='rounded-md border'
                /// Aca aplicamos una validación el date es cada una de los Dias del calendario, deshabilitamos los sábados y domingos
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
            />
            <Calendar
                mode='single'
                selected={date}
                onSelect={setDate}
                className='rounded-md border'
                /// deshabilitar los días futuros
                disabled={(date) => date > new Date()}
            />
            {/*/// 2.1  */}
            <Calendar
                mode='multiple'
                selected={multiplesDates}
                onSelect={(dates) => setMultiplesDates(dates || [])}
                className='rounded-md border'
            />

            <div>
                <h1 className='text-3xl'>Información</h1>
                <div className='border-b'>
                    <p>{smallDate}</p>
                    <p>{multiplesDates?.map((date) => date.toLocaleDateString("es-ES")).join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
