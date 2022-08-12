import { CreateEventHandler } from "../../notification/handler";
import { ItemsRequestFactory } from "./itemsRequests";


export default function ItemService() {
  const Notification = CreateEventHandler()
  const { addCategory, addForm, delCategory, update, listCategory } = ItemsRequestFactory(Notification)

  return {
    addCategory, addForm, delCategory, update, listCategory
  }
}