//all functions and methods needed to resolve a query

export const resolvers = {
   Query: {
    authors: () => {
        return [{
            id: "001",
            name: "Goldy"
        }]
    },
    books: () => {
        return [{
            id: "b001",
            name: "New Book mae",
            publishedYr: 2024,
        }]
    }
   }
}