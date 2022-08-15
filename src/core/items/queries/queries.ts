import { useQuery } from "@tanstack/react-query"


export enum ItemQueryNames {
  "item" = "item",
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


export default function useItemQueries<T>({ handler, queryName }: UseQueryProps<T>) {
  // Access the client
  // const queryClient = useQueryClient()
  // eslint-disable-next-line no-debugger
  // Queries
  return useQuery([queryName], handler)
}