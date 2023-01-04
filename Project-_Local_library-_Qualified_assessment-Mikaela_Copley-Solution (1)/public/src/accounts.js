function findAccountById(accounts, id){
 let result = accounts.find((account)=> account.id === id)
return result
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) =>
  nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1
);
return accounts;
}



function getTotalNumberOfBorrows(account, books) {
  const acId = account.id;
  let total = 0
  books.forEach(book =>book.borrows.forEach(borrow=>acId === borrow.id && total++));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
