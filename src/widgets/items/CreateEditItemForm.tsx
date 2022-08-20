import React, { useEffect } from 'react';
import { Formik, useFormik } from 'formik';
import { AddItemFormFields, TItemForm } from '../../core/items/type/types';
import { TFormFieldArgs } from "../../core/TFormFieldArgs";
import * as Yup from 'yup'
import { ItemSchema } from './ItemSchema';



export type CreateEditItemPageArgs = {
  formFields: TFormFieldArgs<AddItemFormFields>
  formName: string,
  handleFormSubmit: (value: TItemForm) => Promise<any>,
  formValues: TItemForm,
  title?: string
}



const Field = (props) => {
  if (props.as ==="input") {
    return <input {...props} />
  }
  if (props.as ==="select") {
    return <select {...props} />
  }
  if (props.as ==="textarea") {
    return <textarea {...props} />
  }

  return <input {...props } />
}

function FormFields({formFields, formik}) {

  const fieldJsx: JSX.Element[] = [];

  for (const { label, name, fieldType, fieldTag, extraClasses, parentClasses, ...field } of formFields) {
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
              onChange={formik.handleChange}
              value={formik.values[name]}
              />
          </div>
        )
    );
  }

  return <>{fieldJsx}</>
}

export function CreateEditItemForm(props: CreateEditItemPageArgs): JSX.Element {

  const formik = useFormik({
    initialValues: props.formValues,
    onSubmit: async (values, actions) => {
      await props.handleFormSubmit(values);
      actions.setSubmitting(false);
    },
    validationSchema: ItemSchema
  })

  useEffect(() => {

    for (const { name } of props.formFields) {
      formik.setFieldValue(name, props.formValues[name])
    }

  }, [props.formValues])



  return (
    <>

      <form onSubmit={formik.handleSubmit}>
        <>
          <FormFields formik={formik} formFields={props.formFields} />
          <button disabled={!formik.isValid || !formik.dirty || formik.isSubmitting} type="submit" className="btn btn-primary">Create Item</button>
        </>
      </form>

    </>
  );

}
