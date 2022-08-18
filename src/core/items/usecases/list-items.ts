


import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { ItemsSummaryPayload } from "../type/payload"
import { itemRequestsFactory } from "../infrastructure/itemRequests"



export class UseListItems {

  private Language: ReturnType<typeof AppLanguage>
  private Notification: ReturnType<typeof CreateEventHandler>
  private request: ReturnType<typeof itemRequestsFactory>

  constructor(
    // @todo: refactor!! remove request dependency
    ) {
    this.Language = AppLanguage()
    this.Notification = CreateEventHandler()
    this.request = itemRequestsFactory({})
  }

  async listItems() {
    // calls the save on
    // eslint-disable-next-line no-debugger
    const items = await this.request.items({skip: 0, limit: 20}).catch( () => {

      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
      
    });

    if (items?.length) {
      this.Notification.notifier({
        message: this.Language.items.list.fetch.success,
        notificationType: 'success',
        heading: this.Language.items.list.fetch.heading
      });
      return items
    }

  }

  async quickListItems({useNotifications} = {useNotifications: false}) {
    // calls the save on
    // eslint-disable-next-line no-debugger
    const items = await this.request.items({limit: 5, skip: 0}).catch( () => {

      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
      
    });

    if (items?.length) {
      useNotifications && this.Notification.notifier({
        message: this.Language.items.list.fetch.success,
        notificationType: 'success',
        heading: this.Language.items.list.fetch.heading
      });
      return items
    }

  }
}