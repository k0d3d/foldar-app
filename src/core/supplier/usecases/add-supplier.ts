


import { AppLanguage } from "../../lang"
import { CreateEventHandler } from "../../notification/handler"
import { AppError } from "../../error/error"
import { supplierRequestsFactory } from "../infrastructure/supplierRequests"
import { TSupplierSummaryPayload } from "../type/payload"
import { TItemSupplier } from "../type/type"



export class UseAddSupplier {

  private Language: ReturnType<typeof AppLanguage>
  private Notification: ReturnType<typeof CreateEventHandler>
  private request: ReturnType<typeof supplierRequestsFactory>

  constructor(
  ) {
    this.Language = AppLanguage()
    this.Notification = CreateEventHandler()
    this.request = supplierRequestsFactory({})
  }

  async addSupplier(supplier: TItemSupplier) {
    // calls the save on
    // eslint-disable-next-line no-debugger
    const suppliers = await this.request.add(supplier).catch( () => {

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
}