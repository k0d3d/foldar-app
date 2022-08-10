


import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { ItemsPayload } from "../type/payload"



export class UseListItems {

  private Language: ReturnType<typeof AppLanguage>
  private Notification: ReturnType<typeof CreateEventHandler>

  constructor(
    private request: () => Promise<ItemsPayload[] | undefined>
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
}