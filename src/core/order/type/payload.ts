
export interface ItemData {
  itemName: string;
  id: string;
}

export interface TOrderItemPayload {
  orderSupplier: any;
  _id: string;
  orderType: string;
  itemName: string;
  orderAmount: number;
  orderDescription: string;
  orderInvoiceNumber: string;
  orderStatus: number;
  orderVisibility: boolean;
  isDrugStocOrder: boolean;
  orderDate: Date;
  itemId: string;
  amountSupplied: number;
  orderItemSize: number;
  orderPrice: number;
  order_group_id?: number;
  itemData: ItemData;
  onlineId: string;
  orderInvoice: string;
  paymentReferenceID: string;
  paymentReferenceType: string;
  nafdacRegNo: string;
  nafdacRegName: string;
}



