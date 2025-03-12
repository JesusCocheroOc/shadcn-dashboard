'use client';

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";


const page = () => {

      const [progress, setProgress] = useState(0);

      useEffect(() => {
          const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                  clearInterval(interval);
                  return 100;
                } 

                return oldProgress + 1.5;
            });
          }, 60);

          /// para cuando se desmonta el componente
            return () => clearInterval(interval);
      }, []);


    return (
        <div className=''>

            {/* /// La función cn la importamos de las utilidades, y cambia de color la barra dependiendo del estado */}
            <Progress value={progress} indicatorColor={
                cn(
                    {
                        'bg-red-500': progress < 50,
                        'bg-yellow-500': progress >= 50 && progress < 80,
                        'bg-green-500': progress >= 80
                    }
                )
            }/>
        </div>
    );
};

export default page;
