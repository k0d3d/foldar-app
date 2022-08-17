// import { CreateAddItemForm } from "../../../scripts/items/CreateAddItemForm";
import { useState } from "react";
import { TSupplierForm } from "../../../core/supplier/type/type";
import { UseAddSupplier } from "../../../core/supplier/usecases/add-supplier";
import { CreateAddSupplierForm } from "../../../widgets/supplier/CreateAddSupplierForm";
import { formFields } from "../../../widgets/supplier/supplierFormFields";

export function AddSupplierPage() {

  const formValues = {
    supplierName: "",
    address: "",
    contactPerson: "",
    contactPersonPhone: "",
    email: "",
    otherContact: "",
    phoneNumber: ""

  } as TSupplierForm

  // const {} = useItemQueries({ queryName: ItemQueryNames.categories,  handler: request.listItems.bind(request) })

  const handleFormError = (err) => {
    console.log(err);
  };

  const handleFormSubmit = async (values: TSupplierForm) => {
    const addReq = new UseAddSupplier();
    addReq.addSupplier(values).catch((err) => handleFormError(err));
  };




  return (
    <>
      <div className="row">
        <div className="col-md-7 col-lg-5 mx-auto">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add New Supplier</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <CreateAddSupplierForm
                  title={`Add new Item`}
                  handleFormSubmit={handleFormSubmit}
                  formName="add-item-form"
                  formFields={formFields({formValues})}
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
