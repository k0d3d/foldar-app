import { ItemsSummaryPanePayload } from '../../core/items/type/payload';

export type TPendingCartState = {
  itemId: string;
  orderAmount: number;
  orderSupplier: any;
} | null;
export type TItemSummaryState = ItemsSummaryPanePayload | null;
