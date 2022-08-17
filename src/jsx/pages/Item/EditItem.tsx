import { CreateAddItemForm } from "../../../widgets/CreatePage";
// import { CreateAddItemForm } from "../../../scripts/items/CreateAddItemForm";
import {
  TItemForm,
} from "../../../core/items/type/types";
import SelectCategoryDialog from "../../components/dialog/select-category";
import { formFields } from "../../../widgets/items/itemFormFields";
import useItemCategory from "../../../core/items/hooks/item-category";
import { UseUpdateOneItem } from "../../../core/items/usecases/update-one-item";
import useItemQueries, { ItemQueryNames } from "../../../core/items/queries/queries";
import { UseFetchOneItem } from "../../../core/items/usecases/fetch-one-item";
import { useParams } from "react-router-dom";
import { CreateEditItemForm } from "../../../widgets/items/CreateEditItemForm";

export function EditItemPage() {

  const {itemId} = useParams()
  
  const request = new UseFetchOneItem(itemId || "") // silence ts

  const {data: itemData } = useItemQueries({ queryName: ItemQueryNames.item,  handler: request.fetchOneItem.bind(request) })

  const {
    addCat,
    addToItem,
    openCategoryDialog,
    removeCat,
    removeItemCat,
    catList,
    categoryDialogVisibility,
    setCategoryDialogVisibility,
    formValues
  } = useItemCategory(itemData)

  const handleFormError = (err) => {
    console.log(err);
  };

  const handleFormSubmit = async (values: TItemForm) => {

    const handler = new UseUpdateOneItem(values)
    if (itemData) {
      await handler.updateItem(itemData._id).catch((err) => handleFormError(err));
    }
  
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






  return (formValues && itemData ?
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
              <h4 className="card-title">Update Item</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                
                <CreateEditItemForm
                  title={`Update Item`}
                  handleFormSubmit={handleFormSubmit}
                  formName="add-item-form"
                  formFields={formFields({formValues , openCategoryDialog, removeItemCat})}

                  formValues={formValues}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    :<></>
  );
}
