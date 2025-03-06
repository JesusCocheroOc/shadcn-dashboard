import React from 'react'
import { Badge } from '@/components/ui/badge';

const BadgePage = () => {
  return (
      <div className='flex gap-4'>
          <Badge> default </Badge>
          <Badge variant='destructive'> destructive </Badge>
          <Badge variant='secondary'> secondary </Badge>
          <Badge variant='outline'> outline </Badge>

          {/*/// los badge personalizados*/}
          <Badge className='uppercase' variant='info'>
              {' '}
              info{' '}
          </Badge>
          <Badge variant='default' userId='123'>
              Usuario
          </Badge>
      </div>
  );
}

export default BadgePage