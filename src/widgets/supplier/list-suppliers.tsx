import { useAppRoot } from '../../context/app/app-root'
import useSupplierQueries, { SupplierQueryNames } from '../../core/supplier/queries/queries'
import { UseListSuppliers } from '../../core/supplier/usecases/list-suppliers'
import { ListSupplierComponent } from '../../jsx/components/supplier/list-supplier'

function ListSuppliersTable() {

  const {dashboard} = useAppRoot()
  const {setActiveSummary} = dashboard


  const request = new UseListSuppliers()
  
  const query = useSupplierQueries({ queryName: SupplierQueryNames.quicklist,  handler: request.quickListSuppliers.bind(request) })
  return (
    query.data ? <ListSupplierComponent suppliers={query.data} /> : <><p>Data unavailable.</p></>
  )
}

export default ListSuppliersTable