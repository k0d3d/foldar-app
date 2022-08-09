import { CreateEventHandler, TEventNotificationHandler } from "../notification/handler";

export class AppError {
  

  private notificationHandler: TEventNotificationHandler
  
  
  constructor (
    private message: string,
    private error?: Error
  ) {
    this.notificationHandler = CreateEventHandler()
    if (this.error) {
      this.logError()
    }
  }
  logError() {
    console.log(this.error)
  }

  showError() {
    this.notificationHandler.notifier({
      heading: "Something went wrong!",
      message: this.message,
      notificationType: "error"
    })
  }
}