

import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { orderRequestFactory } from "../infrastructure/orderRequest"
import { TCartItem } from "../type/cart"



export class UseMutateOrderCart {
  private request: ReturnType<typeof orderRequestFactory>
  private Notification: ReturnType<typeof CreateEventHandler>
  private Language: ReturnType<typeof AppLanguage>


  constructor(
  ) {
    this.request = orderRequestFactory({})
    this.Notification = CreateEventHandler()
    this.Language = AppLanguage()
  }

  async saveCartItem(cartItem: TCartItem) {
    // calls the save on
    // eslint-disable-next-line no-debugger
    await this.request.save(cartItem).catch(() => {
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

  async placeSupplierOrder(cartItems: TCartItem[]) {
    await this.request.postCart(cartItems).catch(() => {
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

  async updateOrder(orderItem) {
    const updateRes = await this.request.updateOrder(orderItem).catch(() => {
      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
    })
    if (updateRes.result === 3 && (orderItem.amountSupplied < orderItem.orderAmount)) {
      this.Notification.notifier(
        {
          message: `L[L.set].order.update.amountDis`,
          notificationType: 'success',
          heading: this.Language.items.list.fetch.heading
        }
      );
    }
  }

  async removeOrder(orderId) {
    await this.request.remove(orderId).catch(() => {
      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
    })
    this.Notification.notifier(
      {
        message: `Order Removed`,
        notificationType: 'success',
        heading: this.Language.items.list.fetch.heading
      }
    );

  }





}