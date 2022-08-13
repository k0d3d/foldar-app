import React, { useEffect, useState } from "react";
import { UseAddItem } from "../../../core/items/usecases/add-item";
import { CreateAddItemForm } from "../../../widgets/CreatePage";
// import { CreateAddItemForm } from "../../../scripts/items/CreateAddItemForm";
import {
  AddItemForm,
  AddItemFormFieldArgs,
  TItemCategory,
} from "../../../core/items/type/types";
import ItemCategory from "../../components/item/ItemCategory";
import SelectCategoryDialog from "../../components/dialog/select-category";
import ItemService from "../../../core/items/infrastructure/itemService";
import useItemQueries, { ItemQueryNames } from "../../../core/items/queries/queries";

export function AddItemPage() {
  const [categoryDialogVisibility, setCategoryDialogVisibility] =
    useState(false);
  
  const [catList, setCatList] = useState<TItemCategory[]>([])

  const [formValues, setFormValues] = useState<AddItemForm>({
    itemName: "",
    itemDescription: "",
    itemPrices: 0,
    itemTags: [],
    suppliers: [],
    additionalData: {},
    invoiceNumber: "",
    itemCategory: []
  }  as AddItemForm)

  useEffect(() => {
    itemsService.listCategory(function(categories){
      // eslint-disable-next-line no-debugger
      // debugger
      setCatList(categories)
    });
  }, [])

  // const {} = useItemQueries({ queryName: ItemQueryNames.categories,  handler: request.listItems.bind(request) })

  const handleFormError = (err) => {
    console.log(err);
  };

  const handleFormSubmit = async (values: AddItemForm) => {
    const addItemRequest = new UseAddItem({...values, itemCategory: formValues.itemCategory});
    addItemRequest.createItem().catch((err) => handleFormError(err));
  };

  const itemsService = ItemService()

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

  //Remove Supplier From List
  // const removeItemSup = function(index){
  //   formValues.suppliers.splice(index,1);
  // };

  // const updateItem = function(){
  //   itemsService.update(formValues, function(){
  //     $scope.saveButtonText = 'Save Item';
  //   });
  // };

  const openCategoryDialog = () =>
    setCategoryDialogVisibility(!categoryDialogVisibility);

  const formFields: AddItemFormFieldArgs = [
    {
      name: "itemName",
      label: "Name",
    },
    {
      name: "itemCategory",
      label: "Category",
      parentClasses: "col-md-6",
      CustomComponent: (props) => (
        <ItemCategory
          openCategoryDialog={openCategoryDialog}
          form={formValues}
          removeItemCat={removeItemCat}
          {...props}
        />
      ),
    },
    {
      name: "itemDescription",
      fieldTag: "textarea",
      label: "Description",
      extraClasses: "item-desc-input",
    },
    {
      name: "sellingPrice",
      fieldType: "number",
      label: "Price",
      parentClasses: "col-md-6",
    },
    {
      name: "itemTags",
      fieldTag: "textarea",
      label: "Tags",
    },
  ];

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
                  formFields={formFields}
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
