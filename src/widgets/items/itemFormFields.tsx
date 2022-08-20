import { AddItemFormFields, TItemForm } from "../../core/items/type/types"
import { TFormFieldArgs } from "../../core/TFormFieldArgs"
import ItemCategory from "../../jsx/components/item/ItemCategory"

type FormFieldsArgs = {
  openCategoryDialog: () => void, 
  formValues: TItemForm, 
  removeItemCat: (index: number) => void, 
} 

export const formFields: (args: FormFieldsArgs) => TFormFieldArgs<AddItemFormFields> = ({openCategoryDialog, formValues, removeItemCat}) => ([
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
    parentClasses: "col-md-4",
  },
  {
    name: "itemPurchaseRate",
    fieldType: "number",
    label: "Purchase Rate",
    parentClasses: "col-md-4",
  },
  {
    name: "itemTags",
    fieldTag: "textarea",
    label: "Tags",
  },
  {
    name: "itemBoilingPoint",
    fieldType: "number",
    label: "Reorder Level",
    parentClasses: "col-md-4",
  },
  {
    name: "itemPackaging",
    fieldType: "text",
    label: "Item Packaging",
    parentClasses: "col-md-4",
  },
  {
    name: "itemForm",
    fieldType: "text",
    label: "Item Form",
    parentClasses: "col-md-4",
  },
  {
    name: "packageSize",
    fieldType: "number",
    label: "Package Size",
    parentClasses: "col-md-4",
  },
  {
    name: "itemSize",
    fieldType: "number",
    label: "Item Size",
    parentClasses: "col-md-4",
  },
])