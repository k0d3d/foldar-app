import React from 'react';
import Moment from 'react-moment';
import { TItemSupplier } from '../../../core/supplier/type/type';


type ListSupplierComponentProps = {
  suppliers: TItemSupplier[]
}

export function ListSupplierComponent({suppliers}: ListSupplierComponentProps) {
  return (<div className="card">
    <div className="card-header">
      <h4 className="card-title">Added Suppliers</h4>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-responsive-md">
          <thead>
            <tr>
              <th style={{
                width: 50
              }}>
                <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                  <input type="checkbox" className="form-check-input" id="checkAll" />
                  <label className="form-check-label" htmlFor="checkAll" />
                </div>
              </th>
              <th>
                <strong>Name</strong>
              </th>
              <th>
                <strong>Location</strong>
              </th>
              <th>
                <strong>Added on</strong>
              </th>

              <th>
                <strong />
              </th>
            </tr>
          </thead>
          <tbody>
            {
              suppliers.map((supplier, key) => (
                <tr key={key}>
                  <td>
                    <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                      <input type="checkbox" className="form-check-input" id="customCheckBox2" />
                      <label className="form-check-label" htmlFor="customCheckBox2" />
                    </div>
                  </td>

                  <td>
                    <div className="d-flex align-items-center">
                      <img src="images/avatar/1.jpg" className="rounded-lg me-2" width={24} alt="" />{" "}
                      <span className="w-space-no">
                        {supplier.supplierName}
                      </span>
                    </div>
                  </td>

                  <td>
                    <strong>{ supplier.address }</strong>
                  </td>

                  <td>
                    <Moment calendar>

                    { supplier.addedOn }
                    </Moment>
                  </td>
                  <td>
                    <div className="d-flex">
                      <a href="#" className="btn btn-primary shadow btn-xs sharp me-1">
                        <i className="fa fa-pencil-alt" />
                      </a>
                      <a href="#" className="btn btn-danger shadow btn-xs sharp">
                        <i className="fa fa-trash" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>);
}
