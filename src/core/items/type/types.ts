export type TItemForm = {
  itemName: string
  itemDescription: string
  itemPrices?: number
  itemCategory: TItemCategory[] 
  itemTags?: string
  additionalData?: any
  invoiceNumber?: any
  itemBoilingPoint?: number 
  sellingPrice?: number 
  itemPurchaseRate?: number
  suppliers?: any
  itemPackaging:string
  itemForm: string
  packageSize: number
  itemSize: number
}

export type AddItemFormFields = keyof TItemForm


export type TItemCategory = {
  _id: string,
  categoryName: string,
  categoryParent: string,
  categoryType: string
}