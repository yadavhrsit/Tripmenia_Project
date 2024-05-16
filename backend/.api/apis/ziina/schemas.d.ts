declare const CreatePaymentIntent: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly description: "Amount to charge. This should be an integer value representing the amount in fils.\nFor example, if you wish to charge 10 AED and 50 fils, you should pass 1050.\n";
                readonly examples: readonly [1050];
            };
            readonly currency_code: {
                readonly type: "string";
                readonly description: "Currency code of the amount to charge. This should be a 3-letter ISO currency code.\nFor example, if you wish to charge 10 AED, you should pass AED. \nFor more information on supported currencies, please visit the Supported Currencies page.\n";
            };
            readonly message: {
                readonly type: "string";
                readonly description: "A message to be displayed to the user on the hosted payment page.\n";
            };
            readonly success_url: {
                readonly type: "string";
                readonly description: "The URL to be called by the hosted web page when the payment is successful.\n";
            };
            readonly cancel_url: {
                readonly type: "string";
                readonly description: "The URL to be called by the hosted web page when the payment is cancelled.\n";
            };
            readonly test: {
                readonly type: "boolean";
                readonly description: "Whether to create a test payment intent. Test payment intents do not require a payment method\nand can be used to test the payment flow.\n";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly description: "A payment intent represents a payment that is to be collected on the client's website.\nOnce created, use the payment intent's ID to navigate to the hosted payment page.\n";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the payment intent. This ID should be used to navigate to the hosted payment page.";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Amount to charge. This should is an integer value representing the amount in fils.";
                };
                readonly currency_code: {
                    readonly type: "string";
                    readonly description: "Currency code of the amount to charge. This should be a 3-letter ISO currency code. \nFor more information on supported currencies, please visit the Supported Currencies page.\n";
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A message to be displayed to the user on the hosted payment page.";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Unix timestamp of when the payment intent was created.";
                };
                readonly redirect_url: {
                    readonly type: "string";
                    readonly description: "The URL to be used to redirect the client to the hosted payment page.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status of the PaymentIntent\n\n`requires_payment_instrument` `requires_user_action` `pending` `completed` `failed`";
                    readonly enum: readonly ["requires_payment_instrument", "requires_user_action", "pending", "completed", "failed"];
                };
                readonly latest_error: {
                    readonly type: "object";
                    readonly description: "An error that was encountered processing the payment intent";
                    readonly properties: {
                        readonly message: {
                            readonly type: "string";
                            readonly description: "A human-readable error message";
                        };
                    };
                };
                readonly success_url: {
                    readonly type: "string";
                    readonly description: "The URL to be called by the hosted web page when the payment is successful.";
                };
                readonly cancel_url: {
                    readonly type: "string";
                    readonly description: "The URL to be called by the hosted web page when the payment is cancelled.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentIntent: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the payment intent to get";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "A payment intent represents a payment that is to be collected on the client's website.\nOnce created, use the payment intent's ID to navigate to the hosted payment page.\n";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the payment intent. This ID should be used to navigate to the hosted payment page.";
                };
                readonly amount: {
                    readonly type: "string";
                    readonly description: "Amount to charge. This should is an integer value representing the amount in fils.";
                };
                readonly currency_code: {
                    readonly type: "string";
                    readonly description: "Currency code of the amount to charge. This should be a 3-letter ISO currency code. \nFor more information on supported currencies, please visit the Supported Currencies page.\n";
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A message to be displayed to the user on the hosted payment page.";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly description: "Unix timestamp of when the payment intent was created.";
                };
                readonly redirect_url: {
                    readonly type: "string";
                    readonly description: "The URL to be used to redirect the client to the hosted payment page.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly description: "The status of the PaymentIntent\n\n`requires_payment_instrument` `requires_user_action` `pending` `completed` `failed`";
                    readonly enum: readonly ["requires_payment_instrument", "requires_user_action", "pending", "completed", "failed"];
                };
                readonly latest_error: {
                    readonly type: "object";
                    readonly description: "An error that was encountered processing the payment intent";
                    readonly properties: {
                        readonly message: {
                            readonly type: "string";
                            readonly description: "A human-readable error message";
                        };
                    };
                };
                readonly success_url: {
                    readonly type: "string";
                    readonly description: "The URL to be called by the hosted web page when the payment is successful.";
                };
                readonly cancel_url: {
                    readonly type: "string";
                    readonly description: "The URL to be called by the hosted web page when the payment is cancelled.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { CreatePaymentIntent, GetPaymentIntent };
