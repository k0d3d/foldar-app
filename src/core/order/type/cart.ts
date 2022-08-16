import { Supplier } from "../../supplier/domain/supplier"


export type TCartItem = {
  itemId: string
  itemName: string
  orderAmount: number
  orderPrice: number
  orderSupplier: Supplier
  orderDate: string
}