import { UseFetchOneItem } from "../usecases/fetch-one-item";
import useItemQueries, { ItemQueryNames } from "./queries";


export function useGetItem(id: string) {
  const request = new UseFetchOneItem(id) 

  return  useItemQueries({ queryName: ItemQueryNames.item,  handler: request.fetchOneItem.bind(request), queryParams: [id] })
}