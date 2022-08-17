import { AddSupplierFormFields, TSupplierForm } from "../../core/supplier/type/type"
import { TFormFieldArgs } from "../../core/TFormFieldArgs"
import ItemCategory from "../../jsx/components/item/ItemCategory"

type FormFieldsArgs = {
  formValues: TSupplierForm, 
} 
type TSupplierFormFields = (args?: FormFieldsArgs) => TFormFieldArgs<AddSupplierFormFields>

export const formFields: TSupplierFormFields = () => ([
  {
    name: "supplierName",
    label: "Supplier Name",
  },
  {
    name: "address",
    label: "Supplier Location/Address",
    fieldTag: "textarea",
  },
  {
    name: "email",
    label: "Email",
    fieldType: "email",
    parentClasses: "col-md-6",
  },
  {
    name: "phoneNumber",
    fieldType: "tel",
    label: "Phone Number",
    parentClasses: "col-md-5",
  },
  {
    name: "contactPerson",
    label: "Contact Person",
  },
  {
    name: "contactPersonPhone",
    fieldType: "tel",
    label: "Contact Person Phone",
    parentClasses: "col-md-5",
  },
  {
    name: "otherContact",
    label: "Supplier Note",
    fieldTag: "textarea"
  }
])