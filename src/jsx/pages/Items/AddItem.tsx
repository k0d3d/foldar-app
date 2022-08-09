import React from 'react'
import { UseAddItem } from '../../../core/items/usecases/add-item';
import { CreateAddItemForm } from '../../../widgets/CreatePage';
// import { CreateAddItemForm } from "../../../scripts/items/CreateAddItemForm";
import { AddItemForm, AddItemFormFieldArgs } from '../../../core/items/type/types';


export function AddItemPage() {

  const formFields: AddItemFormFieldArgs = [
    {
      name: "itemName",
      label: "Name",
    },
    {
      name: "itemCategory",
      label: "Category",
      parentClasses: "col-md-6"
    },
    {
      name: "itemDescription",
      fieldTag: "textarea",
      label: "Description",
      extraClasses: "item-desc-input"
    },
    {
      name: "itemPrices",
      fieldType: "number",
      label: "Price",
      parentClasses: "col-md-6"
    },
    {
      name: "itemTags",
      fieldTag: "textarea",
      label: "Tags"      
    },
  ];

  const handleFormError = (err) => {
    console.log(err)
  }

  const handleFormSubmit = async (values: AddItemForm) => {
    //c
    const addItemRequest = new UseAddItem(values)
    addItemRequest.createItem().catch(err => handleFormError(err))
  };

  return (
    <>
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
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}