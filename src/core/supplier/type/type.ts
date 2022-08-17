export type TItemSupplier = {
  address: string
  linkedIds?: string[]
  addedOn?: string
  supplierName: string
  supplierID?: string
}  


export type TSupplierForm = {
  supplierName: string,
  phoneNumber: string,
  email: string,
  address: string,
  otherContact: string,
  contactPerson: string,
  contactPersonPhone: string,
}

export type AddSupplierFormFields = keyof TSupplierForm
