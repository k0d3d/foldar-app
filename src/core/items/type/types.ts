export type TAddItemForm = {
  suppliers: any
  itemName: string
  itemDescription: string
  itemPrices: number
  itemCategory: TItemCategory[] 
  itemTags: string[]
  additionalData?: any
  invoiceNumber?: any
  itemBoilingPoint?: number 
  sellingPrice?: number 
  itemPurchaseRate?: number
}

export type AddItemFormFields = keyof TAddItemForm


export type TItemFormFieldArgs = {
  label: string 
  placeholder?: string 
  name: Partial<AddItemFormFields>, 
  fieldType?: "email" | "text" | "number",
  fieldTag?: "input" | "select" | "textarea",
  extraClasses?: string,
  parentClasses?: string,
  CustomComponent?: (props: any) => JSX.Element,
  customComponentProps?: any,

}[]

export type TItemCategory = {
  _id: string,
  categoryName: string,
  categoryParent: string,
  categoryType: string
}