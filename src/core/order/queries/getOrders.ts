import { request } from "http";
import { UseFetchOrders } from "../usecases/fetch-orders";
import useOrderQueries, { OrderQueryNames } from "./queries";


export function useGetOrders () {
  const request = new UseFetchOrders()

  return useOrderQueries({ queryName: OrderQueryNames.orders,  handler: request.getOrders.bind(request) })
}