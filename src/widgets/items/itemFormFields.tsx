import { TAddItemForm, TItemFormFieldArgs } from "../../core/items/type/types"
import ItemCategory from "../../jsx/components/item/ItemCategory"

type FormFieldsArgs = {
  openCategoryDialog: () => void, 
  formValues: TAddItemForm, 
  removeItemCat: (index: number) => void, 
} 

export const formFields: (args: FormFieldsArgs) => TItemFormFieldArgs = ({openCategoryDialog, formValues, removeItemCat}) => ([
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
])