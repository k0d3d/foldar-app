import { Item } from "../domain/Item"


export type ItemsPayload = {
  itemName: string
  itemDescription: string
  itemPrices: string[]
  itemCategory: number | string | null
  itemTags: string[]
  additionalData?: any
  itemLowPoint?: number
  inStock?: boolean
} 

export type AddItemPayload = {
  itemName: string
  itemDescription: string
  itemPrices: string[]
  itemCategory: string[]
  itemTags: string[]
  additionalData?: any
  itemLowPoint?: number
  orderInvoiceNumber?: string
  initialStock?: number
  itemClass?: string
} 

export type ListItemPayload = {
  items: Item[]
} 