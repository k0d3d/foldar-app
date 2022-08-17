


import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { ItemsSummaryPayload } from "../type/payload"



export class UseListItems {

  private Language: ReturnType<typeof AppLanguage>
  private Notification: ReturnType<typeof CreateEventHandler>

  constructor(
    // @todo: refactor!! remove request dependency
    private request: (args?: any) => Promise<ItemsSummaryPayload[] | undefined>
  ) {
    this.Language = AppLanguage()
    this.Notification = CreateEventHandler()
  }

  async listItems() {
    // calls the save on
    // eslint-disable-next-line no-debugger
    const items = await this.request().catch( () => {

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
    const items = await this.request({limit: 5}).catch( () => {

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