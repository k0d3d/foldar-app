import { TItemForm } from '../../core/items/type/types';
import * as Yup from 'yup';

export const ItemSchema: Yup.SchemaOf<Partial<TItemForm>> = Yup.object({
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
  sellingPrice: Yup.number(),
  itemPackaging: Yup.string(),
  itemForm: Yup.string(),
  packageSize: Yup.number(),
  itemSize: Yup.number(),
});
