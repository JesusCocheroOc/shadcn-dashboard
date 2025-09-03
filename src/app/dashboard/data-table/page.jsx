import {payments} from '@/data/payments.data.ts'
import {DataTable} from './data-table'
import { columns } from './columns.tsx'
async function getData() {
  return payments
}

const HomePage = async () => {

  const data = await getData()

  return (
      <div>
        {/*/// Uso */}
          <DataTable columns={columns} data={data} />
      </div>
  );
}

export default HomePage