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
`
module.exports = typeDefs