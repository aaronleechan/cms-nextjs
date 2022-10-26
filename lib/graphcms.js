import { GraphQLClient } from 'graphql-request';

export const graphcmsClient = new GraphQLClient(process.env.GRAPHQL, {
  headers: {
    Authorization: `${process.env.GRAPHQL_BEARER}`,
  },
});