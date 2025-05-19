

export const typeDefs = `#graphQL
  type Author {
    id: ID!
    name: String!
  }

  type Book {
    id: ID!
    name: String!
    publishedYr: Int
  }

  type Query {
      authors: [Author]
      books: [Book]
  }
`
