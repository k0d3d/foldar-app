


import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { supplierRequestsFactory } from "../infrastructure/supplierRequests"
import { TSupplierSummaryPayload } from "../type/payload"



export class UseListSuppliers {

  private Language: ReturnType<typeof AppLanguage>
  private Notification: ReturnType<typeof CreateEventHandler>
  private request: ReturnType<typeof supplierRequestsFactory>

  constructor(
  ) {
    this.Language = AppLanguage()
    this.Notification = CreateEventHandler()
    this.request = supplierRequestsFactory({})
  }

  async listAll() {
    // calls the save on
    // eslint-disable-next-line no-debugger
    const suppliers = await this.request.all().catch( () => {

      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
      
    });

    if (suppliers?.length) {
      this.Notification.notifier({
        message: this.Language.items.list.fetch.success,
        notificationType: 'success',
        heading: this.Language.items.list.fetch.heading
      });
      return suppliers as TSupplierSummaryPayload[]
    }

  }

  async suggestSupplierName(queryString: string) {
    // calls the save on
    // eslint-disable-next-line no-debugger
    const suppliers = await this.request.getSupplierName(queryString).catch( () => {

      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
      
    });

    if (suppliers?.length) {
      return suppliers as TSupplierSummaryPayload[]
    } else {
      return []
    }

  }

  async quickListSuppliers({useNotifications} = {useNotifications: false}) {
    // calls the save on
    const suppliers = await this.request.all({limit: 5, page: 0 }).catch( () => {

      const appHasError = new AppError(this.Language.items.list.fetch.error)
      appHasError.showError()
      
    });

    if (suppliers?.length) {
      useNotifications && this.Notification.notifier({
        message: this.Language.items.list.fetch.success,
        notificationType: 'success',
        heading: this.Language.items.list.fetch.heading
      });
      return suppliers as TSupplierSummaryPayload[]
    }

  }
}