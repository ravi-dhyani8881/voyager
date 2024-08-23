export const typeDefs = `#graphql
    "used for Voyager entry point"
    type Root {
        query: Query
    }

    type Advanced {
        fieldName: String
        values: [Values]
    } 

    type Values {
        name: String
        count: Int
    }

    type Query {
        findravibestByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ravibestResponse
    }

    type ravibestResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsravibest]
    }
    
   type Recordsravibest {
            id: String
            name: String
            supplier_id: String
            quantity_per_unit: String
            unit_price: String
            units_in_stock: String
            units_on_order: String
            recorder_level: String
            discontinued: String

            findravime2ByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ravime2Response
    }

    type Query {
        findravime2ByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ravime2Response
    }

    type ravime2Response {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsravime2]
    }
    
   type Recordsravime2 {
            order_id: String
            product_id: String
            unit_price: String
            quantity: String
            discount: String

    }

    type Query {
        findordersByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ordersResponse
    }

    type ordersResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsorders]
    }
    
   type Recordsorders {
            id: String
            ship_via: String
            freight: String
            ship_name: String
            ship_address: String
            ship_city: String
            ship_region: String
            ship_postal_code: String
            ship_country: String

            findravime2ByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ravime2Response
    }

    type Query {
        findheadsheetByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): headsheetResponse
    }

    type headsheetResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsheadsheet]
    }
    
   type Recordsheadsheet {
            id: String
            customer_id: String
            ship_country: String

            findravime2ByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ravime2Response
    }

    type Query {
        findapiKeyByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): apiKeyResponse
    }

    type apiKeyResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [RecordsapiKey]
    }
    
   type RecordsapiKey {
            ID: String
            userId: String
            apiKey: String
            lastUpdate: String
            addedDate: String
            status: String

    }

    type Query {
        findusersByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): usersResponse
    }

    type usersResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsusers]
    }
    
   type Recordsusers {
            ID: String
            apiKey: String
            birthday: String
            email: String
            emailAddress: String
            firstName: String
            gender: String
            lastName: String
            middleName: String
            password: String
            phoneNumber: String
            userActivationKey: String
            userStatus: String

    }

`;
