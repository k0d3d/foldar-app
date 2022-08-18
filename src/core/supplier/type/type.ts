export type TItemSupplier = {
  supplierName: string,
  phoneNumber?: string,
  email?: string,
  address?: string,
  otherContact?: string,
  contactPerson?: string,
  contactPersonPhone?: string,
  supplierID?: string
  linkedIds?: string[]
  addedOn?: string
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
