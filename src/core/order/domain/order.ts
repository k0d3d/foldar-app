import { Supplier } from "../../supplier/domain/supplier"
import { OrderStatuses } from "../type/order-statuses"

export class OrderItem {
  private readonly orderType!: string
  private readonly itemName!: string
  private readonly itemId!: string
  private readonly orderItemSize!: number
  private readonly product_id!: number
  private readonly sku!: string
  private readonly orderAmount!: number
  private readonly orderDate!: Date
  private readonly orderDescription!: string
  private readonly orderSupplier!: Supplier
  private readonly amountSupplied!: number
  private readonly orderInvoiceNumber!: string
  private readonly orderStatus!: OrderStatuses
  private readonly orderVisibility!: boolean
  private readonly order_number!: string
  private readonly order_group_id!: number
  private readonly orderExpDate!: number
  private readonly orderPrice!: number
  private readonly paymentReferenceType!: string
  private readonly paymentReferenceID!: string
  private readonly isJuninOrder!: boolean
}