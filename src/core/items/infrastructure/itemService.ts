import { CreateEventHandler } from "../../notification/handler";
import { itemRequestsFactory } from "./itemRequests";


export default function itemService() {
  const Notification = CreateEventHandler()
  const { addCategory, addForm, delCategory, update, listCategory } = itemRequestsFactory(Notification)

  return {
    addCategory, addForm, delCategory, update, listCategory
  }
}