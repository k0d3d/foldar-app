

import React from 'react'
import {FaEllipsisH} from 'react-icons/fa'

function ItemCategory({form, removeItemCat, openCategoryDialog}) {
  return (
    <div className='mb-3'>
      <div className="lister form-label" >
        <button className="btn btn-sm btn-secondary nop" onClick={() => openCategoryDialog()} ><FaEllipsisH />&nbsp;Pick Categories</button>
      </div>
      <ul className="fa-ul list-group list-group-flush" id="itemCategory" >
        {
          form.itemCategory && form.itemCategory.map((itemCat: string, key: number) => (
            <li className='list-group-item d-flex justify-content-between align-items-center' key={key} onClick={() => removeItemCat(key)}>
              <span>
                { itemCat }
              </span>
              <span className="text-sm">
                tap to remove
              </span> 
            </li>
          ) )
        }
      </ul>
      <p>{ form.itemCategory.length } categories selected.</p>
    </div>
  )
}

export default ItemCategory