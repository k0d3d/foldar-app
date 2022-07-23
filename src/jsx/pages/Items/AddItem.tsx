import React from 'react'
import { CreateAddItemForm } from '../../../scripts/CreatePage'
import { AddItemForm, AddItemFormFieldArgs } from '../../../scripts/iterms/types';


export function AddItemPage() {

  const formFields: AddItemFormFieldArgs = [
    {
      name: "itemName",
      label: "Name",
      extraClasses: "whgy"
    },
    {
      name: "itemCategory",
      label: "Category"
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

  const handleFormSubmit = async (values: AddItemForm) => {
    //c
    console.log(values);
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