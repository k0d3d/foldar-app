

import { itemRequestsFactory } from "../infrastructure/itemRequests"
import { AddItemPayload } from "../type/payload"

import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"



export class UseAddItem{
  private request: ReturnType<typeof itemRequestsFactory>
  private Notification: ReturnType<typeof CreateEventHandler>
  private Language: ReturnType<typeof AppLanguage>

  
  constructor(
    private item: AddItemPayload
  ){
    this.request = itemRequestsFactory({})
    this.Notification = CreateEventHandler()
    this.Language = AppLanguage()


  }

  async createItem(){
    // calls the save on
    // eslint-disable-next-line no-debugger
    const saveRequest = await this.request.save(this.item).catch(() => {
      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
    })
    if (saveRequest) {
      this.Notification.notifier(
        {
          message: this.Language.items.list.fetch.success,
          notificationType: 'success',
          heading: this.Language.items.list.fetch.heading
        }
      );
    }
  }
}