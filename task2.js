const library = {
  name: "Dział fantastyki",
  books: [],
};
const book1 = {
  title: "Epoka Mitu",
  author: "Michael J. Sullivan",
  yearOfPublication: 2016,
};
const book2 = {
  title: "Droga Cienia",
  author: "Brent Weeks",
  yearOfPublication: 2008,
};
const book3 = {
  title: "Zimowy Monarcha",
  author: "Bernard Cornwell",
  yearOfPublication: 1995,
};
library.books.push(book1);
library.books.push(book2);
library.books.push(book3);
const title1 = library.books[0].title;
const author1 = library.books[0].author;
const yearOfPublication1 = library.books[0].yearOfPublication;
const title2 = library.books[1].title;
const author2 = library.books[1].author;
const yearOfPublication2 = library.books[1].yearOfPublication;
const title3 = library.books[2].title;
const author3 = library.books[2].author;
const yearOfPublication3 = library.books[2].yearOfPublication;
const bookInfo1 = `Tytuł: ${title1}, Autor: ${author1}, Rok wydania: ${yearOfPublication1}.`;
const bookInfo2 = `Tytuł: ${title2}, Autor: ${author2}, Rok wydania: ${yearOfPublication2}.`;
const bookInfo3 = `Tytuł: ${title3}, Autor: ${author3}, Rok wydania: ${yearOfPublication3}.`;
let oldestBook;
if (
  yearOfPublication1 < yearOfPublication2 &&
  yearOfPublication1 < yearOfPublication3
)
  oldestBook = book1.title;
else if (
  yearOfPublication2 < yearOfPublication1 &&
  yearOfPublication2 < yearOfPublication3
)
  oldestBook = book2.title;
else oldestBook = book3.title;
const libraryInfo = `Biblioteka ${library.name} zawiera książki: ${title1}, ${title2}, ${title3}. Najstarsza książka: ${oldestBook}.`;
console.log(libraryInfo);
