import { useQuery } from "@tanstack/react-query"


export enum OrderQueryNames {
  "orders" = "orders",
  "quicklist" = "orders_quicklist",
}

interface QueryHandler<Type> {
  (): Promise<Type | undefined>;
}

type UseQueryProps<T> = {
  handler: QueryHandler<T>,
  queryName: OrderQueryNames
}


export default function useOrderQueries<T>({ handler, queryName }: UseQueryProps<T>) {
  // Access the client
  // const queryClient = useQueryClient()
  // eslint-disable-next-line no-debugger
  // Queries
  return useQuery([queryName], handler)
}