import { ApolloClient, InMemoryCache } from "@apollo/client";

const accessToken =
    "production" === process.env.NODE_ENV
        ? process.env.CONTENTFUL_API_ACCESS_TOKEN
        : process.env.CONTENTFUL_API_PREVIEW_ACCESS_TOKEN;

const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master?access_token=${accessToken}`,
    cache: new InMemoryCache(),
});

export default client;
