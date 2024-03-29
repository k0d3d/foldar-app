import { Supplier } from "../../supplier/domain/supplier"
import { TItemSupplier } from "../../supplier/type/type"


export type TCartItem = {
  itemId: string
  itemName: string
  orderAmount: number
  orderPrice: number
  orderSupplier: Supplier
  orderDate: string
  orderItemSize: number

}

export interface TOrderSupplier extends TItemSupplier {
  _id?: any
  supplierID: string;
  supplierName: string;
}


export interface TCartItemsPayload {
  _id: string;
  orderSupplier: TOrderSupplier;
  orderType: string;
  itemName: string;
  itemId: string;
  orderAmount: number;
  orderDate: string;
  orderDescription: string;
  orderInvoiceNumber: string;
  orderStatus: number;
  orderVisibility: boolean;
  orderPrice: number;
  isJuninOrder: boolean;
  orderItemSize: number
}