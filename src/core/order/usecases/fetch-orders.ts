

import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { orderRequestFactory } from "../infrastructure/orderRequest"
import { OrderItem } from "../domain/order"
import { TOrderItemPayload } from "../type/payload"



export class UseFetchOrders {
  private request: ReturnType<typeof orderRequestFactory>
  private Notification: ReturnType<typeof CreateEventHandler>
  private Language: ReturnType<typeof AppLanguage>


  constructor(
  ) {
    this.request = orderRequestFactory({})
    this.Notification = CreateEventHandler()
    this.Language = AppLanguage()
  }



  async getOrders() {
    // calls the save on
    // eslint-disable-next-line no-debugger
    const orders = await this.request.orders().catch(() => {
      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
    })

    return orders as TOrderItemPayload[]
    this.Notification.notifier(
      {
        message: this.Language.items.list.fetch.success,
        notificationType: 'success',
        heading: this.Language.items.list.fetch.heading
      }
    );

  }
}