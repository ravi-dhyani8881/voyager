
[{"ravibest"=>{"fields"=>[{"name"=>"id", "type"=>"string"}, {"name"=>"name", "type"=>"string"}, {"name"=>"supplier_id", "type"=>"string"}, {"name"=>"quantity_per_unit", "type"=>"string"}, {"name"=>"unit_price", "type"=>"string"}, {"name"=>"units_in_stock", "type"=>"string"}, {"name"=>"units_on_order", "type"=>"string"}, {"name"=>"recorder_level", "type"=>"string"}, {"name"=>"discontinued", "type"=>"string"}], "relations"=>[{"table"=>[{"name"=>"ravime2"}]}]}}, {"ravime2"=>{"fields"=>[{"name"=>"order_id", "type"=>"string"}, {"name"=>"product_id", "type"=>"string"}, {"name"=>"unit_price", "type"=>"string"}, {"name"=>"quantity", "type"=>"string"}, {"name"=>"discount", "type"=>"string"}], "relations"=>[]}}, {"orders"=>{"fields"=>[{"name"=>"id", "type"=>"string"}, {"name"=>"ship_via", "type"=>"string"}, {"name"=>"freight", "type"=>"string"}, {"name"=>"ship_name", "type"=>"string"}, {"name"=>"ship_address", "type"=>"string"}, {"name"=>"ship_city", "type"=>"string"}, {"name"=>"ship_region", "type"=>"string"}, {"name"=>"ship_postal_code", "type"=>"string"}, {"name"=>"ship_country", "type"=>"string"}], "relations"=>[{"table"=>[{"name"=>"ravime2"}]}]}}, {"headsheet"=>{"fields"=>[{"name"=>"id", "type"=>"string"}, {"name"=>"customer_id", "type"=>"string"}, {"name"=>"ship_country", "type"=>"string"}], "relations"=>[{"table"=>[{"name"=>"ravime2"}]}]}}, {"apiKey"=>{"fields"=>[{"name"=>"ID", "type"=>"string"}, {"name"=>"userId", "type"=>"string"}, {"name"=>"apiKey", "type"=>"string"}, {"name"=>"lastUpdate", "type"=>"string"}, {"name"=>"addedDate", "type"=>"string"}, {"name"=>"status", "type"=>"string"}], "relations"=>[{"table"=>[]}]}}, {"users"=>{"fields"=>[{"name"=>"ID", "type"=>"string"}, {"name"=>"apiKey", "type"=>"string"}, {"name"=>"birthday", "type"=>"string"}, {"name"=>"email", "type"=>"string"}, {"name"=>"emailAddress", "type"=>"string"}, {"name"=>"firstName", "type"=>"string"}, {"name"=>"gender", "type"=>"string"}, {"name"=>"lastName", "type"=>"string"}, {"name"=>"middleName", "type"=>"string"}, {"name"=>"password", "type"=>"string"}, {"name"=>"phoneNumber", "type"=>"string"}, {"name"=>"userActivationKey", "type"=>"string"}, {"name"=>"userStatus", "type"=>"string"}], "relations"=>[{"table"=>[]}]}}]

export const typeDefs = `#graphql
    "used for Voyager entry point"
    type Root {
        query: Query
        mutation: Mutation
    }

    type Todo {
        id: ID!
        content: String!
        completed: Boolean!
    }

    type Query {
        todos: [Todo!]!
    }

    input AddTodoMutationInput {
        content: String!
    }

    input UpdateTodoMutationInput {
        id: ID!
        content: String
        completed: Boolean
    }

    type Mutation {
        addTodo(input: AddTodoMutationInput! ): Todo!
        updateTodo(input: UpdateTodoMutationInput!): Todo!
    }
`;
