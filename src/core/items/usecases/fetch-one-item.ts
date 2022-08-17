

import { itemRequestsFactory } from "../infrastructure/itemRequests"
import { ItemsPayload, ItemsSummaryPayload } from "../type/payload"

import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"



export class UseFetchOneItem{
  private request: ReturnType<typeof itemRequestsFactory>
  private Notification: ReturnType<typeof CreateEventHandler>
  private Language: ReturnType<typeof AppLanguage>
  private locationId: string
  
  constructor(private itemId: string){
    this.request = itemRequestsFactory({})
    this.Notification = CreateEventHandler()
    this.Language = AppLanguage()
    this.locationId = ""
  }

  async fetchOneItem(){
    // calls the save on
    // eslint-disable-next-line no-debugger
    const oneItem = await this.request.fetchItem(this.itemId).catch(() => {
      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
    })

    if (oneItem) {
      return oneItem as ItemsPayload
    }

  }

  async fetchOneItemSummary(){
    // calls the save on
    // eslint-disable-next-line no-debugger
    const oneItemSummary = await this.request.fetchItemSummary(this.itemId, this.locationId).catch(() => {
      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
    })
    if (oneItemSummary) {
      return oneItemSummary as ItemsSummaryPayload
    }
  }
}