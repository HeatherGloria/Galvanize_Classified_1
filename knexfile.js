// Update with your config settings.
'use strict'
module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/classified_dev'
    },
    test: {
      client: 'pg',
      connection: 'postgres://localhost/classified_test'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    },
};
