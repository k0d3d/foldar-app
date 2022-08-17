import React from 'react';
import { Field, Form, Formik } from 'formik';
import { TFormFieldArgs } from "../../core/TFormFieldArgs";
import * as Yup from 'yup'
import { AddSupplierFormFields, TSupplierForm } from '../../core/supplier/type/type';



export type CreateAddSupplierPageArgs = {
  formFields: TFormFieldArgs<AddSupplierFormFields>
  formName: string,
  handleFormSubmit: (value: TSupplierForm) => Promise<any>,
  formValues: TSupplierForm,
  title?: string
}

const AddSupplierSchema: Yup.SchemaOf<Partial<TSupplierForm>> = Yup.object({
  supplierName: Yup.string().required(),
  address: Yup.string().required(),
  addedOn: Yup.string(),
  contactPerson: Yup.string(),
  contactPersonPhone: Yup.string(),
  phoneNumber: Yup.string(),
  otherContact: Yup.string(),
  email: Yup.string()
});


export function CreateAddSupplierForm(props: CreateAddSupplierPageArgs): JSX.Element {

  const fieldJsx: JSX.Element[] = [];

  for (const { label, name, fieldType, fieldTag, extraClasses, parentClasses, ...field } of props.formFields) {
    fieldJsx.push(
      field.CustomComponent ? <field.CustomComponent key={name} /> :
        (
          <div className={"mb-3 " + parentClasses} key={name}>
            <label className='form-label' htmlFor={name}>
              {label || 'item property'}
            </label>
            <Field
              name={name}
              as={fieldTag || "input"}
              type={fieldType}
              className={"form-control input-default " + extraClasses}
              {...field} />
          </div>
        )
    );
  }

  

  return (
    <>
      <Formik
        initialValues={props.formValues}
        validationSchema={AddSupplierSchema}
        onSubmit={async (values, actions) => {
          await props.handleFormSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {
          // @ts-ignore
          ({ isValid, dirty, isSubmitting }) => {
            return (
              <Form>
                <>
                  {fieldJsx}
                  <button disabled={!isValid || !dirty || isSubmitting} type="submit" className="btn btn-primary">Add Supplier</button>
                </>
              </Form>
            );
          }
        }

      </Formik>
    </>
  );

}
