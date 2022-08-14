import React, { useEffect, useState } from "react";
import { UseAddItem } from "../../../core/items/usecases/add-item";
import { CreateAddItemForm } from "../../../widgets/CreatePage";
// import { CreateAddItemForm } from "../../../scripts/items/CreateAddItemForm";
import {
  TAddItemForm,
  TItemFormFieldArgs,
  TItemCategory,
} from "../../../core/items/type/types";
import ItemCategory from "../../components/item/ItemCategory";
import SelectCategoryDialog from "../../components/dialog/select-category";
import ItemService from "../../../core/items/infrastructure/itemService";
import useItemQueries, { ItemQueryNames } from "../../../core/items/queries/queries";
import { formFields } from "../../../widgets/items/itemFormFields";
import useItemCategory from "../../../core/items/hooks/item-category";

export function EditItemPage() {

  const {
    addCat,
    addToItem,
    openCategoryDialog,
    removeCat,
    removeItemCat,
    formValues,
    catList,
    categoryDialogVisibility,
    setCategoryDialogVisibility
  } = useItemCategory()

  const handleFormError = (err) => {
    console.log(err);
  };

  const handleFormSubmit = async (values: TAddItemForm) => {
    const addItemRequest = new UseAddItem({...values, itemCategory: formValues.itemCategory});
    addItemRequest.createItem().catch((err) => handleFormError(err));
  };



  //Remove Supplier From List
  // const removeItemSup = function(index){
  //   formValues.suppliers.splice(index,1);
  // };

  // const updateItem = function(){
  //   itemsService.update(formValues, function(){
  //     $scope.saveButtonText = 'Save Item';
  //   });
  // };






  return (
    <>
      <SelectCategoryDialog
        addCat={addCat}
        addToItem={addToItem}
        catList={catList}
        removeCat={removeCat}
        isShown={categoryDialogVisibility}
        closeDialog={() => setCategoryDialogVisibility(false)}
      />
      <div className="row">
        <div className="col-md-7 col-lg-5 mx-auto">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add New Item</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <CreateAddItemForm
                  handleFormSubmit={handleFormSubmit}
                  formName="add-item-form"
                  formFields={formFields({formValues, openCategoryDialog, removeItemCat})}
                  formValues={formValues}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
