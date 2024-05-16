import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type CreatePaymentIntentBodyParam = FromSchema<typeof schemas.CreatePaymentIntent.body>;
export type CreatePaymentIntentResponse201 = FromSchema<typeof schemas.CreatePaymentIntent.response['201']>;
export type GetPaymentIntentMetadataParam = FromSchema<typeof schemas.GetPaymentIntent.metadata>;
export type GetPaymentIntentResponse200 = FromSchema<typeof schemas.GetPaymentIntent.response['200']>;
