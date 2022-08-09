
export type TCreateNotificationArgs = {
  message: string,
  heading: string, 
  notificationType: "error" | "success" | "info"
}

export type TNotificationMessage = { 
  heading: string,
  body: string,
  type: string,
  state: any,
  close: () => void 
}

export type TNotice = {
  heading: string ,
  message: string ,
  type: string ,
  icon: string ,

}