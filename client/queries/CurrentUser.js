import gql from "graphql-tag";

// using named query as unnamed one throwing an error (due to project using an outdated Apollo client)
export default gql`
  query getUser {
    user {
      id
      email
    }
  }
`;
