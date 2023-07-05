import { type z } from 'zod';

export type StringInput = string | z.ZodString | { [key: string]: any; type: StringConstructor };
export type NumberInput = number | z.ZodNumber | { [key: string]: any; type: NumberConstructor };
export type DateInput = Date | z.ZodDate | { [key: string]: any; type: DateConstructor };
