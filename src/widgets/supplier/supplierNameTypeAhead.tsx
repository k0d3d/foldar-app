import React, { useCallback, useState } from 'react'
import { TItemSupplier } from '../../core/supplier/type/type'
import debounce  from "lodash/debounce";
import { TSupplierSummaryPayload } from '../../core/supplier/type/payload';
import { TOrderSupplier } from '../../core/order/type/cart';


type SupplierNameTypeAheadProps = {
  orderSupplier: TOrderSupplier
  setOrderSupplier: (supplier: any) => void
  typeaheadRequest: (queryString: string) => Promise<TSupplierSummaryPayload[]>
  inputEleClasses?: JSX.Element
}


function SupplierNameTypeAhead({orderSupplier, setOrderSupplier, typeaheadRequest}: SupplierNameTypeAheadProps) {
  const [supplierName, setSupplierName] = useState("");
  const [suggestedSuppliers, setSuggestedSuppliers] = useState<TSupplierSummaryPayload[] | undefined>([])

  const debouncedSave = useCallback(
    debounce((supplierName) => typeaheadRequest(supplierName), 500),
    []
  );


  const suggestSupplier = async (supplierName: string) => {
    setSupplierName(supplierName)
    if(supplierName.length < 1) return
    const suppliersList = await  debouncedSave(supplierName)
    if (suppliersList){
      setSuggestedSuppliers(suppliersList)
    }
  }

  const selectItemSupplier = (supplier: TSupplierSummaryPayload) => {

    setOrderSupplier({
      supplierID: supplier._id,
      supplierName: supplier.supplierName
    })
    setSuggestedSuppliers(undefined)
    setSupplierName("")
  } 

  return (
    <div className="typeaheadset">
      {
        orderSupplier.supplierID && (
          <p>
            Item Supplier:&nbsp;
            <strong>
              {orderSupplier.supplierName}
            </strong>
          </p>
        )
      }
      <input
        type="text"
        placeholder="Type supplier name."
        className="form-control"
        onChange={(e) =>
          suggestSupplier(e.target.value)
        }
        value={supplierName}
      />
      {
        suggestedSuppliers && suggestedSuppliers.length > 0 && (
          <div className="type-ahead-drop-down">
            <div className="basic-list-group">
              <ul className="list-group">
                {
                  suggestedSuppliers.map((supplier, key) => (
                    <li onClick={() => selectItemSupplier(supplier)} className="list-group-item list-group-item-action" key={key}>
                      {supplier.supplierName}
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>
        )
      }

    </div>
  )

}

export default SupplierNameTypeAhead