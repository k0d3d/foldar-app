import { Item } from "../domain/Item"
import { TItemCategory } from "./types"


export type ItemsPayload = {
  itemName: string
  itemDescription: string
  itemCategory: TItemCategory[]
  itemTags: string[]
  additionalData?: any
  currentStock?: boolean
  itemBoilingPoint?: number 
  sellingPrice?: number 
  itemPurchaseRate?: number
  itemPrices?: number
  _id: string
} 



export type ItemsSummaryPayload = {
  itemName: string
  itemCategory: TItemCategory[]
  currentStock?: boolean
  itemBoilingPoint?: number 

} 

export type ItemsSummaryPanePayload = {
  _id: any
  itemName: string
  itemDescription: string
  itemCategory: TItemCategory[]
  itemPurchaseRate?: number
  additionalData?: any
  currentStock?: boolean
  itemBoilingPoint?: number 
  lastSupplyDate: string
} 

export type AddItemPayload = {
  itemName: string
  itemDescription: string
  itemPrices?: number
  itemCategory: TItemCategory[]
  itemTags?: string
  additionalData?: any
  itemLowPoint?: number
  orderInvoiceNumber?: string
  initialStock?: number
  itemClass?: string
} 

export type ListItemPayload = {
  items: Item[]
} 