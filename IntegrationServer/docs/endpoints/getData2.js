const getData2 = {
    get: {
        tags: ["API Endpoints"], // operation's tag.
        description: "Get transaction amount from hypothetical server 2", // operation's desc.
        operationId: "getData2", // unique operation id.
        parameters: [

        ],
        // expected responses
        responses: {
            // response code
            200: {
                description: "Get transaction amount", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    description: "Message from the API",
                                    example: "Data from App2",
                                },
                                transaction: {
                                    type: "integer",
                                    description: "Transaction amount",
                                    example: 500,
                                },
                            },
                        },
                    },
                },
            },
        },
    },
}

module.exports = getData2