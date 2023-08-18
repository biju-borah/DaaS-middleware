const totalBilling = {
    get: {
        tags: ["API Endpoints"], // operation's tag.
        description: "Get total billing amount from the hypothetical servers", // operation's desc.
        operationId: "totalBilling", // unique operation id.
        parameters: [

        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Total billing amount", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    description: "Message from the API",
                                    example: "Total billing",
                                },
                                totalBill: {
                                    type: "integer",
                                    description: "Total billing amount",
                                    example: 1500,
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}

module.exports = totalBilling