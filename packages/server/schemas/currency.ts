import { z } from 'zod';
import { Schema, model } from 'mongoose';
import { type CurrencyType } from '../types';

export const CurrencySchema = z.object({
  label: z.string(),
} satisfies CurrencyType);

const schema = new Schema({
  label: { required: true, type: String },
} satisfies CurrencyType);

export const Currency = model('Currency', schema);
