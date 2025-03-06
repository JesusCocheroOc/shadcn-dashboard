import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import React from 'react'

const page = () => {
  return (
      <div className='grid gap-3'>
          <Alert>
              <Terminal className='h-4 w-4' />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                  You can add components and dependencies to your app using the
                  cli.
              </AlertDescription>
          </Alert>

          {/*/// variant="destructive" para ponerlo en rojo  */}
          <Alert variant='destructive'>
              <Terminal className='h-4 w-4' />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                  You can add components and dependencies to your app using the
                  cli.
              </AlertDescription>
          </Alert>

          {/*/// Implementar una nueva variante: success */}
          <Alert variant='success'>
              <Terminal className='h-4 w-4' />
              <AlertTitle> Success! </AlertTitle>
              <AlertDescription>
                  You can add components and dependencies to your app using the
                  cli.
              </AlertDescription>
          </Alert>
      </div>
  );
}

export default page
