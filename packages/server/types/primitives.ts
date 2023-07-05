import { type z } from 'zod';

export type StringInput = string | z.ZodString | { type: StringConstructor; [key: string]: any };
