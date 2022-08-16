import { useAppRoot } from '../../context/app/app-root'
import { itemsRequestFactory } from '../../core/items/infrastructure/itemsRequest'
import useItemQueries, { ItemQueryNames } from '../../core/items/queries/queries'
import { UseListItems } from '../../core/items/usecases/list-items'
import ListItemsTable from '../../jsx/components/item/ListItemsTable'

function ItemsSummaryTable() {

  const {dashboard} = useAppRoot()
  const {setActiveSummary} = dashboard

  const listItemsRequest = itemsRequestFactory({})
  const request = new UseListItems(listItemsRequest.items)
  
  const query = useItemQueries({ queryName: ItemQueryNames.quicklist,  handler: request.quickListItems.bind(request) })

  return (
    query.data ? <ListItemsTable setActiveSummary={setActiveSummary} items={query.data} /> : <><p>Data unavailable.</p></>
  )
}

export default ItemsSummaryTable