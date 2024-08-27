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
        findproductsByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): productsResponse
    }

    type productsResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsproducts]
    }
    
   type Recordsproducts {
            id: INTEGER
            name: VARCHAR
            supplier_id: INTEGER
            quantity_per_unit: VARCHAR(20)
            unit_price: BIGINT
            units_in_stock: SMALLINT
            units_on_order: SMALLINT
            recorder_level: SMALLINT
            discontinued: BOOLEAN

            findorder_detailsByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): order_detailsResponse
    }

    type Query {
        findorder_detailsByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): order_detailsResponse
    }

    type order_detailsResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsorder_details]
    }
    
   type Recordsorder_details {
            order_id: INTEGER
            product_id: INTEGER
            unit_price: BIGINT
            quantity: SMALLINT
            discount: FLOAT

    }

    type Query {
        findsuppliersByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): suppliersResponse
    }

    type suppliersResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordssuppliers]
    }
    
   type Recordssuppliers {
            id: INTEGER
            company_name: VARCHAR(40)
            contact_name: VARCHAR(30)
            contact_title: VARCHAR(30)
            address: VARCHAR(60)
            city: VARCHAR(15)
            region: VARCHAR(15)
            postal_code: VARCHAR(10)
            country: VARCHAR(15)
            phone: VARCHAR(24)
            fax: VARCHAR(24)
            homepage: TEXT

            findproductsByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): productsResponse
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
            id: INTEGER
            customer_id: INTEGER
            employee_id: INTEGER
            order_date: DateTime
            required_date: DateTime
            shipped_date: DateTime
            ship_via: INTEGER
            freight: BIGINT
            ship_name: VARCHAR(40)
            ship_address: VARCHAR(60)
            ship_city: INTEGER
            ship_region: VARCHAR(15)
            ship_postal_code: VARCHAR(10)
            ship_country: VARCHAR(15)

            findorder_detailsByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): order_detailsResponse
    }

    type Query {
        findemployeesByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): employeesResponse
    }

    type employeesResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsemployees]
    }
    
   type Recordsemployees {
            id: INTEGER
            last_name: VARCHAR(20)
            first_name: VARCHAR(15)
            title: VARCHAR(30)
            title_of_courtesy: VARCHAR(25)
            birth_date: DateTime
            hire_date: DateTime
            address: VARCHAR(60)
            city: VARCHAR(15)
            region: VARCHAR(15)
            postal_code: VARCHAR(10)
            country: VARCHAR(15)
            home_phone: VARCHAR(24)
            extension: VARCHAR(4)
            photo: TEXT
            notes: TEXT
            reports_to: INTEGER

            findordersByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ordersResponse
    }

    type Query {
        findcustomersByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): customersResponse
    }

    type customersResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordscustomers]
    }
    
   type Recordscustomers {
            id: INTEGER
            company_name: VARCHAR(40)
            contact_name: VARCHAR(30)
            contact_title: VARCHAR(30)
            address: VARCHAR(60)
            city: VARCHAR(15)
            region: VARCHAR(15)
            postal_code: VARCHAR(10)
            country: VARCHAR(15)
            phone: VARCHAR(24)
            fax: VARCHAR(24)

            findordersByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ordersResponse
    }

    type Query {
        findshippersByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): shippersResponse
    }

    type shippersResponse {
        start: String
        row: String
        statusCode: Int
        totalRecords: Int
        advanced: [Advanced]
        records: [Recordsshippers]
    }
    
   type Recordsshippers {
            id: INTEGER
            company_name: VARCHAR(40)
            phone: VARCHAR(24)

            findordersByQuery(query: String, start: String, rows: String, filterField: String, filterQuery: String, sort: String, advanceField: String, advanceQuery: String, advance: String, field: String ): ordersResponse
    }

`;
