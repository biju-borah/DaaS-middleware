const servers = require('./server')
const tags = require('./tags')
const totalBilling = require('./endpoints/totalBilling')
const getData1 = require('./endpoints/getData1')
const getData2 = require('./endpoints/getData2')
const postData = require('./endpoints/postData')

const docs = {
    openapi: "3.0.3", // present supported openapi version
    info: {
        title: "DaaS Middleware App", // short title.
        description: "APIs documentation for DaaS middleware server", //  desc.
        version: "1.0.0", // version number
        contact: {
            name: "DaaS", // your name
            email: "workatdaas@gmail.com", // your email
            url: "https://github.com/biju-borah/DaaS-middleware", // your website
        },

    },
    ...servers,
    ...tags,
    paths: {
        '/totalBilling': {
            ...totalBilling
        },
        '/data1': {
            ...getData1

        },
        '/data2': {
            ...getData2

        },
        '/postData': {
            ...postData

        }
    }
};

module.exports = docs