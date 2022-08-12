import React from "react"

export type AddItemForm = {
  suppliers: any
  itemName: string
  itemDescription: string
  itemPrices: string[]
  itemCategory: string[] 
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