

import { ItemsRequestFactory } from "../infrastructure/itemsRequests"

import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { TItemForm } from "../type/types"



export class UseUpdateOneItem{
  private request: ReturnType<typeof ItemsRequestFactory>
  private Notification: ReturnType<typeof CreateEventHandler>
  private Language: ReturnType<typeof AppLanguage>

  
  constructor(
    private item: TItemForm
  ){
    this.request = ItemsRequestFactory({})
    this.Notification = CreateEventHandler()
    this.Language = AppLanguage()


  }

  async updateItem(itemId: string){
    // calls the save on
    // eslint-disable-next-line no-debugger
    const update = await this.request.update(itemId, this.item).catch(() => {
      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
    })
    if (update) {
      this.Notification.notifier(
        {
        message: this.Language.items.update.success,
        notificationType: 'success',
          heading: this.Language.items.list.fetch.heading
        }
      );
    }

  }
}