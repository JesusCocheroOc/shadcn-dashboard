'use client';

import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const page = () => {
    const [sliderValue, setSliderValue] = useState(10);

    // PARA EL Slice de rango
    const [rangeValue, setRangeValue] = useState([10,20]);

    return (
        <div className='grid grid-cols-1 gap-3'>

            {/*/// 1. primer slider  */}
            <span>Slider Value: {sliderValue}</span>
            <Slider
                defaultValue={[sliderValue]}
                /// para capturar el valor que asignamos desde el slider
                onValueChange={(value) => setSliderValue(value[0])}
                max={100}
                // esto para el aumento por cada step
                step={1}
            />


            {/*/// 2. slider de rango  */}
            <span>Slider Value: {rangeValue.join(",")}</span>
            <Slider
                defaultValue={rangeValue}
                /// para capturar el valor que asignamos desde el slider
                onValueChange={setRangeValue}
                max={100}
                // esto para el aumento por cada step
                step={1}
            />
        </div>
    );
};

export default page;
