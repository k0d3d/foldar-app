import { Supplier } from "../../supplier/domain/supplier"


export type TCartItem = {
  itemId: string
  itemName: string
  orderAmount: number
  orderPrice: number
  orderSupplier: Supplier
  orderDate: string
}

export interface TOrderSupplier {
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
}