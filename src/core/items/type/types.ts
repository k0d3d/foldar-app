export type AddItemForm = {
  itemName: string
  itemDescription: string
  itemPrices: string[]
  itemCategory: number | string | null
  itemTags: string[]
  additionalData?: any
  invoiceNumber?: any
}

export type AddItemFormFields = keyof AddItemForm


export type AddItemFormFieldArgs = {
  label: string 
  placeholder?: string 
  name: Partial<AddItemFormFields>, 
  fieldType?: "email" | "text" | "number",
  fieldTag?: "input" | "select" | "textarea",
  extraClasses?: string,
  parentClasses?: string
}[]
