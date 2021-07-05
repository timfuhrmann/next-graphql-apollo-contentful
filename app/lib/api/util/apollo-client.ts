import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/vjbgloitgvwy/environments/master?access_token=IRwzK3vY3LtHrK7fr0JvQSZzwKW3p3-cGjCf3y2UYw0`,
    cache: new InMemoryCache(),
});

export default client;
