export class Item {
  readonly itemName!: string
  readonly itemDescription!: string
  readonly itemPrices!: string[]
  readonly itemCategory!: number | string | null
  readonly itemTags!: string[]
  readonly additionalData?: any
  readonly invoiceNumber?: any
}