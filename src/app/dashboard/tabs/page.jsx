
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


import {Tab1} from './ui/tab1'
import {Tab2} from './ui/tab2'

const HomePage = () => {
    return (
        <div>
            {/*/// este es el espacio que se le da a los taps className='w-[400px]*/}
            <Tabs defaultValue='account' className='w-full'>
                {/*/// la lista de mis tabs  */}
                <TabsList className='grid w-full grid-cols-3'>
                    {' '}
                    {/* poner 3 aca para que se vea el otro tab  */}
                    <TabsTrigger value='account'>Account</TabsTrigger>
                    <TabsTrigger value='password'>Password</TabsTrigger>
                    <TabsTrigger value='user'>User</TabsTrigger>
                </TabsList>

                {/*/// Contenido de los tabs  */}
                <TabsContent value='account'>
                    {/* contenido del tab, es un form  */}
                    <Tab1 />
                </TabsContent>
                <TabsContent value='password'>
                    <Tab2 />
                </TabsContent>
                <TabsContent value='user'>
                    <div> User 212 </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default HomePage;
