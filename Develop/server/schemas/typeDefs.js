const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Book {
    _id: ID
    authors: String!
    description: String!
    bookid: String!
    image: String!
    link: String!
    title: String!
} 

type Query {
   me: User
}

type User {
  _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]!
}
input savedBookValue {
  authors: [String]
  description: String
  bookId: String
  image: String
  link: String
  title: String
}
type Auth {
    token: ID!
    user: User
}


  type Mutation {
    newUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(book: savedBookValue!): User
    removeBook(bookId: String!): User

  }
`;

module.exports = typeDefs;
