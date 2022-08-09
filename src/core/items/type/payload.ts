import { Item } from "../domain/Item"


export type ItemsPayload = {
  itemName: string
  itemDescription: string
  itemPrices: string[]
  itemCategory: number | string | null
  itemTags: string[]
  additionalData?: any
} 

export type AddItemPayload = {
  itemName: string
  itemDescription: string
  itemPrices: string[]
  itemCategory: number | string | null
  itemTags: string[]
  additionalData?: any
} 

export type ListItemPayload = {
  items: Item[]
} 