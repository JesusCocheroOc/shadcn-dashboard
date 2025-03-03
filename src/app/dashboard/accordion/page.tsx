import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

const page = () => {
    const items = [
        {
            value: 'item-1',
            label: 'Is it accessible?',
            answer: ' Yes. It adheres to the WAI-ARIA design pattern.',
        },
        {
            value: 'item-2',
            label: 'Is it styled?',
            answer: 'Yes. It comes with default styles that matches the other components&apos; aesthetic.',
        },
        {
            value: 'item-3',
            label: 'Is it animated?',
            answer: "Yes. It's animated by default, but you can disable it if you prefer.",
        },
    ];
    return (
        <div>
            {/*///  con type='multiple' se mantiene abiertos abiertos*/}
            <Accordion type='multiple' className='w-full'>
              {/*/// Barrer las opciones  */}
              {items.map( item => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.label}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
    );
};

export default page;
