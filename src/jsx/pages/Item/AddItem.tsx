import { UseAddItem } from "../../../core/items/usecases/add-item";
import { CreateAddItemForm } from "../../../widgets/CreatePage";
// import { CreateAddItemForm } from "../../../scripts/items/CreateAddItemForm";
import {
  TItemForm,
} from "../../../core/items/type/types";
import SelectCategoryDialog from "../../components/dialog/select-category";
import useItemCategory from "../../../core/items/hooks/item-category";
import { formFields } from "../../../widgets/items/itemFormFields";

export function AddItemPage() {

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

  // const {} = useItemQueries({ queryName: ItemQueryNames.categories,  handler: request.listItems.bind(request) })

  const handleFormError = (err) => {
    console.log(err);
  };

  const handleFormSubmit = async (values: TItemForm) => {
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
                  title={`Add new Item`}
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
