import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { TItemCategory } from '../../../core/items/type/types'

const defaultList = [] as TItemCategory[]

function SelectCategoryDialog({ removeCat, addToItem, catList = defaultList, isShown, addCat, closeDialog }) {

  const [catForm, setCatForm] = useState({
    catInput: ""
  })

  const clearAndAddCat = (category) => {
    addCat(category)
    setCatForm({catInput: ""})
  }


  return (
    <>
      {
        isShown && (
          <div className={`modal fade show`} role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add a new category</h5>
                </div>
                <div className="modal-body">

                  <>
                    <input type="text" value={catForm.catInput} onChange={e => setCatForm(catForm => ({ ...catForm, catInput: e.target.value }))} className="form-control" />
                    <button className="btn btn-link  btn-block" type="submit" onClick={() => clearAndAddCat(catForm.catInput)}>
                      <FaPlus />&nbsp;
                      Add
                    </button>
                    <h4>Select Categories</h4>
                    <ul className="cat-li list-group">
                      {
                        catList.map((cat: TItemCategory, key) => (
                          <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="ct-name my-0">
                              {cat.categoryName}
                            </p>
                            <p className="ctrl my-0">
                              <button className="btn btn-xs" onClick={() => addToItem(key)}>
                                {" "}
                                Add
                              </button>
                              <button
                                className="btn btn-xs"
                                onClick={() => removeCat(key)}
                                disabled={cat.categoryType == 'system'}
                                ng-show="cat.categoryType != 'system'"
                              >
                                {" "}
                                Delete{" "}
                              </button>

                            </p>
                          </li>
                        ))
                      }
                    </ul>
                    <p>
                      {catList.length} categories
                    </p>
                  </>


                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => closeDialog()}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {
        isShown && <div className="modal-backdrop"></div>
      }
    </>
  )
}

export default SelectCategoryDialog