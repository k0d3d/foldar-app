import { useQuery } from "@tanstack/react-query"
import { ItemsPayload } from "../type/payload";


export enum ItemQueryNames {
  "items" = "items",
  "categories" = "categories"
}

interface QueryHandler<Type> {
  (): Promise<Type | undefined>;
}

type UseQueryProps<T> = {
  handler: QueryHandler<T>,
  queryName: ItemQueryNames
}


export default function useItemQueries({ handler, queryName }: UseQueryProps<ItemsPayload[]>) {
  // Access the client
  // const queryClient = useQueryClient()
  // eslint-disable-next-line no-debugger
  // Queries
  return useQuery([queryName], handler)
}