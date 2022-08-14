import { useEffect, useState } from "react";
import ItemService from "../infrastructure/itemService";
import { TAddItemForm, TItemCategory } from "../type/types";

const itemsService = ItemService()


export default function useItemCategory() {
  const [categoryDialogVisibility, setCategoryDialogVisibility] =
    useState(false);

  const [catList, setCatList] = useState<TItemCategory[]>([])

  const [formValues, setFormValues] = useState<TAddItemForm>({
    itemName: "",
    itemDescription: "",
    itemPrices: 0,
    itemTags: [],
    suppliers: [],
    additionalData: {},
    invoiceNumber: "",
    itemCategory: []
  } as TAddItemForm)

  useEffect(() => {
    itemsService.listCategory(function(categories){
      // eslint-disable-next-line no-debugger
      // debugger
      setCatList(categories)
    });
  }, [])

  //Add Category
  const addCat = function(catInput){
    if(catInput.length > 0){
      itemsService.addCategory(catInput, function(r){
        setCatList(exList => ([...exList, r]))
      });
    }
  };

  //Remove/Delete a Category
  const removeCat = function(index){
    itemsService.delCategory(catList[index]._id, function(){
      const newCatList = catList.filter((cat, pos) => pos !== index );
      setCatList(newCatList)
    });
  };

  //Add a category to the item's category list
  const addToItem = function(index){
    const category = catList[index];
    const itemCategory = [...formValues.itemCategory, category]
    setFormValues((exFormValues) => ({ ...exFormValues, itemCategory } ))
  };

  const removeItemCat = function(index){
    const newCategoryList = formValues.itemCategory.filter((_, pos) => pos !== index );
    setFormValues(exForm => ({...exForm, itemCategory: newCategoryList}))
  };

  const openCategoryDialog = () =>
  setCategoryDialogVisibility(!categoryDialogVisibility);


  return {
    addCat, 
    removeCat,
    addToItem,
    removeItemCat,
    openCategoryDialog,
    setCategoryDialogVisibility,
    categoryDialogVisibility,
    formValues,
    catList,
    setCatList,

  }


}

