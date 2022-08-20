import React from 'react';
import { Field, Form, Formik } from 'formik';
import { AddItemFormFields, TItemForm } from '../../core/items/type/types';
import { TFormFieldArgs } from "../../core/TFormFieldArgs";
import { ItemSchema } from './ItemSchema';



export type CreateAddItemPageArgs = {
  formFields: TFormFieldArgs<AddItemFormFields>
  formName: string,
  handleFormSubmit: (value: TItemForm) => Promise<any>,
  formValues: TItemForm,
  title?: string
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
        validationSchema={ItemSchema}
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
                  <button disabled={!isValid || !dirty || isSubmitting} type="submit" className="btn btn-primary">Create Item</button>
                </>
              </Form>
            );
          }
        }

      </Formik>
    </>
  );

}
