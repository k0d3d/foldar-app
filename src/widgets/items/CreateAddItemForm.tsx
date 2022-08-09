import React from 'react';
import { Field, Form, Formik } from 'formik';
import { AddItemFormFieldArgs, AddItemForm } from '../../core/items/type/types';




export type CreateAddItemPageArgs = {
  formFields: AddItemFormFieldArgs
  formName: string,
  handleFormSubmit: (value: AddItemForm) => Promise<any>
}

export const formValues: AddItemForm = {
  itemName: "",
  itemTags: [""],
  itemCategory: "",
  itemDescription: "",
  itemPrices: [],

}


export function CreateAddItemForm(props: CreateAddItemPageArgs): JSX.Element {

  const fieldJsx: JSX.Element[] = [];

  for (const { label, name, fieldType, fieldTag, extraClasses, parentClasses, ...field } of props.formFields) {
    fieldJsx.push(
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
    );
  }

  return (
    <>
      <Formik
        initialValues={formValues}
        onSubmit={async (values, actions) => {
          await props.handleFormSubmit(values);
          actions.setSubmitting(false);
        }}
      >

        <Form>
          {fieldJsx}
          <button type="submit" className="btn btn-primary">Create Item</button>
        </Form>
      </Formik>
    </>
  );

}
