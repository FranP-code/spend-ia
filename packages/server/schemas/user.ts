import { Schema, model } from 'mongoose';
import { z } from 'zod';
import { type UserType } from '../types';

export const UserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
} satisfies UserType);

const schema = new Schema({
  email: { required: true, type: String, unique: true },
  name: { required: true, type: String },
  password: { required: true, type: String },
} satisfies UserType);

export const User = model('User', schema);
