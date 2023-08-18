const postData = {
    post: {
        tags: ["API Endpoints"], // operation's tag.
        description: "Post transaction amount to hypothetical server 1 and get total bill amount from the server", // operation's desc.
        operationId: "postData", // unique operation id.
        parameters: [

        ],
        requestBody: {
            required: true,
            content: {
                // content-type
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            amount: {
                                type: "integer",
                                description: "Transaction amount",
                                example: 500,
                            },
                        },
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "Post transaction successful", // response desc.
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
                                    description: "TotalBill amount",
                                    example: 1500,
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

module.exports = postData;
