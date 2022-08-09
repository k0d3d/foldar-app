import { useQuery } from "@tanstack/react-query"


export enum ItemQueryNames {
  "items" = "items"
}

type UseQueryProps = {
  handler: () => Promise<any>,
  queryName: ItemQueryNames
}


export default function useItemQueries({ handler, queryName }: UseQueryProps) {
  // Access the client
  // const queryClient = useQueryClient()
  // eslint-disable-next-line no-debugger
  // Queries
  return useQuery([queryName], handler)
}