import { Item } from "../domain/Item"
import { TItemCategory } from "./types"


export type ItemsPayload = {
  itemSize: number
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



export type  ItemsSummaryPanePayload = {
  _id: string
  itemName: string
  itemSize: number
  itemCategory: TItemCategory[]
  currentStock?: boolean
  itemBoilingPoint?: number 
  itemPurchaseRate: number
  lastSupplyDate: string
} 

export type ItemsSummaryPayload = {
  _id: any
  itemName: string
  itemDescription: string
  itemCategory: TItemCategory[]
  itemPurchaseRate: number
  additionalData?: any
  currentStock: boolean
  itemBoilingPoint?: number 
  lastSupplyDate: string
  orderItemSize: number
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
  itemPackaging?:string
  itemForm?: string
  packageSize: number
  itemSize: number
} 

export type ListItemPayload = {
  items: Item[]
} 