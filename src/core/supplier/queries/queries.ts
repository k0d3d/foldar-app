import { useQuery } from "@tanstack/react-query"


export enum SupplierQueryNames {
  "suppliers" = "suppliers",
  "supplier" = "supplier",
  "quicklist" = "suppliers_quicklist",
}

interface QueryHandler<Type> {
  (): Promise<Type | undefined>;
}

type UseQueryProps<T> = {
  handler: QueryHandler<T>,
  queryName: SupplierQueryNames
}


export default function useSupplierQueries<T>({ handler, queryName }: UseQueryProps<T>) {
  // Access the client
  // const queryClient = useQueryClient()
  // eslint-disable-next-line no-debugger
  // Queries
  return useQuery([queryName], handler)
}