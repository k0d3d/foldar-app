import { ItemsRequestFactory } from '../../core/items/infrastructure/itemsRequests'
import useItemQueries, { ItemQueryNames } from '../../core/items/queries/queries'
import { UseListItems } from '../../core/items/usecases/list-items'
import ListItemsTable from '../../jsx/components/item/ListItemsTable'

function ItemsSummaryTable() {

  const listItemsRequest = ItemsRequestFactory({})
  const request = new UseListItems(listItemsRequest.items)
  
  const query = useItemQueries({ queryName: ItemQueryNames.items,  handler: request.listItems.bind(request) })

  return (
    query.data ? <ListItemsTable items={query.data} /> : <><p>Data unavailable.</p></>
  )
}

export default ItemsSummaryTable