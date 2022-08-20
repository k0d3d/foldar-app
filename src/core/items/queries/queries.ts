import { useQuery } from "@tanstack/react-query"


export enum ItemQueryNames {
  "item" = "item",
  "items" = "items",
  "categories" = "items_categories",
  "quicklist" = "items_quicklist",
}

interface QueryHandler<Type> {
  (): Promise<Type | undefined>;
}

type UseQueryProps<T> = {
  handler: QueryHandler<T>,
  queryName: ItemQueryNames,
  queryParams?: string[]
}


export default function useItemQueries<T>({ handler, queryName, queryParams }: UseQueryProps<T>) {
  // Queries
  queryParams = queryParams || []
  return useQuery([queryName, ...queryParams], handler)
}