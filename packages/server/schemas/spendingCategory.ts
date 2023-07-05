import { z } from 'zod';
import { Schema, model } from 'mongoose';
import { type SpendingCategoryType } from '../types';

export const SpendingCategorySchema = z.object({
  backgroundColor: z.string(),
  label: z.string(),
  userId: z.string(),
} satisfies SpendingCategoryType);

const schema = new Schema({
  backgroundColor: { required: true, type: String },
  label: { required: true, type: String },
  userId: { required: true, type: String },
} satisfies SpendingCategoryType);

export const SpendingCategory = model('SpendingCategory', schema);
