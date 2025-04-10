import gql from "graphql-tag";

const helloWorldAdminApiExtensions = gql`
  extend type Query {
    getHelloApi: String!
  }
`;
export const shopApiExtensions = gql`
  ${helloWorldAdminApiExtensions}
`;
