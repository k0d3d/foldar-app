import { TItemCategory } from "../type/types"

export class Item {
  readonly itemName!: string
  readonly itemDescription!: string
  readonly itemPrices!: string[]
  readonly itemCategory!: TItemCategory[]
  readonly itemTags!: string[]
  readonly additionalData?: any
  readonly invoiceNumber?: any
}