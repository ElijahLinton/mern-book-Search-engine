import { gql } from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($book: savedBookValue!) {
    saveBook(bookId: $book) {
      _id
      username
      email
      savedBooks {
        authors
        bookId
        image
        title
        description
        link
      }
    }
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        savedBooks {
          authors
          bookId
          image
          title
          description
          link
        }
      }
    }
  }
`;
