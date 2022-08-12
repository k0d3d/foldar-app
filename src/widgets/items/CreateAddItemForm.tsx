import React from 'react';
import { Field, Form, Formik } from 'formik';
import { AddItemFormFieldArgs, AddItemForm } from '../../core/items/type/types';




export type CreateAddItemPageArgs = {
  formFields: AddItemFormFieldArgs
  formName: string,
  handleFormSubmit: (value: AddItemForm) => Promise<any>,
  formValues: AddItemForm,

}


export function CreateAddItemForm(props: CreateAddItemPageArgs): JSX.Element {

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
        onSubmit={async (values, actions) => {
          if (Object.values(values).find(value => !value.length)) {
            alert("form is empty")
            return
          }
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
