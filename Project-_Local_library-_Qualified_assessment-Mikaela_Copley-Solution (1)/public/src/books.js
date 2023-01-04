/*
function findAccountById(accounts, id){
 let result = accounts.find((account)=> account.id === id)
return result
}
*/

function findAuthorById(authors, id) {
  let result = authors.find((author)=> author.id===id)
  return result;
}

function findBookById(books, id) {
  let result = books.find((book)=> book.id===id)
  return result;
}

function partitionBooksByBorrowedStatus(books) {
 let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 /*The .filter() method will look through the books array and compile a new array that meets our condition.
  Within the filter method we will use a helper function with the every method that will check if our condition
  is true within the borrow array.  If it is true */
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 /*The .filter() method will look through the books array and compile a new array that meets our condition.
  Within the filter method we will use a helper function with the .some() method that will check if our condition
  is true within the borrow array.  If it is true */
 let finalArray = [[...booksBorrowed], [...booksReturned]];
 return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow)=>{
    let account = accounts.find((account)=> account.id===borrow.id)
    return {...borrow, ...account}
  })
  .slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
