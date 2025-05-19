

export const typeDefs = `#graphQL
  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    tittle: String!
    publishedYr: Int
    author: Author
  }

  type Query {
      authors: [Author]
      books: [Book]
  }

  type Mutation {
    addBook(tittle: String!, authorId: ID!,  publishedYr: Int): Book!
  }
`
