import gql from "graphql-tag";

// using named mutation as unnamed an one throwing an error (due to project using an outdated Apollo client)
export default gql`
  mutation Logout {
    logout {
      id
      email
    }
  }
`;
