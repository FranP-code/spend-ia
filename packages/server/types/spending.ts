import { type StringInput, type DateInput, type NumberInput } from './primitives';

export interface SpendingType {
  amount: NumberInput;
  currencyId: StringInput;
  date: DateInput;
  spendingCategoryId: StringInput;
  userId: StringInput;
}
