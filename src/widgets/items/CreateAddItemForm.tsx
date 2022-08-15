import React from 'react';
import { Field, Form, Formik } from 'formik';
import { TItemFormFieldArgs, TItemForm } from '../../core/items/type/types';
import * as Yup from 'yup'



export type CreateAddItemPageArgs = {
  formFields: TItemFormFieldArgs
  formName: string,
  handleFormSubmit: (value: TItemForm) => Promise<any>,
  formValues: TItemForm,
  title?: string
}

const AddItemSchema: Yup.SchemaOf<Partial<TItemForm>> = Yup.object({
  itemName: Yup.string().required(),
  itemDescription: Yup.string().required(),
  additionalData: Yup.object({}),
  invoiceNumber: Yup.string(),
  // itemCategory: Yup.array().of(Yup.string()),
  itemCategory: Yup.array(),
  itemPrices: Yup.number(),
  itemTags: Yup.string(),
  suppliers: Yup.array().of(Yup.object({})),
  itemBoilingPoint: Yup.number(),
  itemPurchaseRate: Yup.number(),
  sellingPrice: Yup.number()
});


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
        validationSchema={AddItemSchema}
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
