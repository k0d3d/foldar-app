

import { ItemsRequestFactory } from "../infrastructure/itemsRequests"
import { AddItemPayload } from "../type/payload"

import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"



export class UseFetchOneItem{
  private request: ReturnType<typeof ItemsRequestFactory>
  private Notification: ReturnType<typeof CreateEventHandler>
  private Language: ReturnType<typeof AppLanguage>
  private locationId: string
  
  constructor(private itemId: string){
    this.request = ItemsRequestFactory({})
    this.Notification = CreateEventHandler()
    this.Language = AppLanguage()
    this.locationId = ""
  }

  async fetchOneItem(){
    // calls the save on
    // eslint-disable-next-line no-debugger
    const saveRequest = await this.request.fetchItem(this.itemId).catch(() => {
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

  async fetchOneItemSummary(){
    // calls the save on
    // eslint-disable-next-line no-debugger
    const saveRequest = await this.request.fetchItemSummary(this.itemId, this.locationId).catch(() => {
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