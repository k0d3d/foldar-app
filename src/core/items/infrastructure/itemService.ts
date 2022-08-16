import { CreateEventHandler } from "../../notification/handler";
import { itemsRequestFactory } from "./itemsRequest";


export default function itemService() {
  const Notification = CreateEventHandler()
  const { addCategory, addForm, delCategory, update, listCategory } = itemsRequestFactory(Notification)

  return {
    addCategory, addForm, delCategory, update, listCategory
  }
}