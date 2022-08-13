import { useQuery } from "@tanstack/react-query"
import { ItemsPayload, ItemsSummaryPanePayload, ItemsSummaryPayload } from "../type/payload";


export enum ItemQueryNames {
  "items" = "items",
  "categories" = "categories",
  "quicklist" = "quicklist",
  "itemSummary" = "itemSummary"
}

interface QueryHandler<Type> {
  (): Promise<Type | undefined>;
}

type UseQueryProps<T> = {
  handler: QueryHandler<T>,
  queryName: ItemQueryNames
}


export default function useItemQueries({ handler, queryName }: UseQueryProps<ItemsSummaryPanePayload[] | ItemsSummaryPayload[]>) {
  // Access the client
  // const queryClient = useQueryClient()
  // eslint-disable-next-line no-debugger
  // Queries
  return useQuery([queryName], handler)
}