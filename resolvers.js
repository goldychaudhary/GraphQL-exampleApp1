//all functions and methods needed to resolve a query


const data = {
  authors: [
    {id: "1", name: "author 1", bookIds: ["001", "002", "003"]},
    {id: "2", name: "author 2", bookIds: ["001", "002", "004"]},
    {id: "3", name: "author 3", bookIds: ["002", "003", "005"]},
    {id: "4", name: "author 4", bookIds: ["001", "005", "004"]},
  ],
  books: [
    {id: "001", tittle: "bbok 1", publishedYr: 2025, authorId: "1" },
    {id: "002", tittle: "bbok 2", publishedYr: 2025, authorId: "3" },
    {id: "003", tittle: "bbok 3", publishedYr: 2025, authorId: "4" },
    {id: "004", tittle: "bbok 4", publishedYr: 2025, authorId: "2" },
    {id: "005", tittle: "bbok 5", publishedYr: 2025, authorId: "1" },
    {id: "006", tittle: "bbok 6", publishedYr: 2025, authorId: "3" },
  ]
}

export const resolvers = {
    Book:{ 
        author: (parent, args, context,info) => {
            return data?.authors?.find(elm => elm.id === parent?.authorId)
        }
    },
    Author: {
        books: (parent, args, context,info) => {
            return data?.books?.filter(elm => parent?.bookIds?.includes(elm?.id))
        }
    },
   Query: {
    authors: () => {
        return data.authors
    },
    books: () => {
        return data.books
    }
   },

   Mutation: {
     addBook: (parent, args, context,info) => {
        const newBook = {...args, id: data.books.length + 1}
            data?.books.push(newBook)
            return newBook
        }
   }
}