import { AddItemFormFields } from "./items/type/types";



export type TFormFieldArgs<TForm> = {
  label: string;
  placeholder?: string;
  name: Partial<TForm>;
  fieldType?: "email" | "text" | "number" | "tel";
  fieldTag?: "input" | "select" | "textarea";
  extraClasses?: string;
  parentClasses?: string;
  CustomComponent?: (props: any) => JSX.Element;
  customComponentProps?: any;

}[];
