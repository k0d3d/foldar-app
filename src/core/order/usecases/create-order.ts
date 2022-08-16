

import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { TPendingCartState } from "../../../context/app/TPendingCartState"
import { ItemsPayload, ItemsSummaryPayload } from "../../items/type/payload"
import { orderRequestFactory } from "../infrastructure/orderRequest"



export class UseOrderCart {
  private request: ReturnType<typeof orderRequestFactory>
  private Notification: ReturnType<typeof CreateEventHandler>
  private Language: ReturnType<typeof AppLanguage>


  constructor(
    private cart: TPendingCartState,
    private orderItem: ItemsSummaryPayload
  ) {
    this.request = orderRequestFactory({})
    this.Notification = CreateEventHandler()
    this.Language = AppLanguage()
  }

  async saveCartItem() {
    // calls the save on
    // eslint-disable-next-line no-debugger
    await this.request.save({
      itemName: this.orderItem.itemName,
      orderPrice: this.orderItem.itemPurchaseRate,
      orderDate: new Date().toString(),
      itemId: this.orderItem._id,
      orderAmount: this.cart?.orderAmount || 0,
      orderSupplier: this.cart?.orderSupplier
    }).catch(() => {
      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
    })
    this.Notification.notifier(
      {
        message: this.Language.items.list.fetch.success,
        notificationType: 'success',
        heading: this.Language.items.list.fetch.heading
      }
    );

  }
}