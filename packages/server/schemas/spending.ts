import { z } from 'zod';
import { Schema, model } from 'mongoose';
import { type SpendingType } from '../types/spending';

export const SpendingSchema = z.object({
  amount: z.number(),
  currencyId: z.string(),
  date: z.date(),
  spendingCategoryId: z.string(),
  userId: z.string(),
} satisfies SpendingType);

const schema = new Schema({
  amount: { required: true, type: Number },
  currencyId: { required: true, type: String },
  date: { required: true, type: Date },
  spendingCategoryId: { required: true, type: String },
  userId: { required: true, type: String },
} satisfies SpendingType);

export const Spending = model('Spending', schema);
