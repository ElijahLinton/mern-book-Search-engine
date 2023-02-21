const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Book {

    authors: string!
    description: string!
    bookid: string!
    image: string!
    link: string!
    title:string!
} 

type User {
    username: string!
    email string!
    password: string!
    savedBooks: [bookSchema]!
}

  type Mutation {
    newUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(thoughtText: String!): Book
    removeBook(thoughtId: ID!): Book

  }
`
module.exports = typeDefs