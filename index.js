const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((el)=> console.log(el.authorFirst, el.authorLast, "wrote", el.name, "in", el.publishDate));

//Sort books from oldest to most recent
function sortbooksdate(){
  books.sort((x, y)=> x.publishDate - y.publishDate);
  console.log(books);
}
sortbooksdate();

//sort books alphabetically
function sorttitlesalph(){
  titles.sort();
  console.log(titles);
}
sorttitlesalph();

//Find who wrote War and Peace
const warAndPeace = books.find((book) => book.name === "War and Peace");
if (warAndPeace){
  console.log(`author of War and Peace: ${warAndPeace.authorFirst} ${warAndPeace.authorLast}`);
}

//how many books were written before 1900?
const booksBefore1900 = books.filter((book) => book.publishDate < 1900);
const numberofbooks1900 = booksBefore1900.length;
console.log('here is the number of books published before 1900:', numberofbooks1900);

//was there at least one book published within the last 100 years?
const currentYear = new Date().getFullYear();
const bookswithin100yrs = books.some((book) => currentYear - book.publishDate <= 100);

if(bookswithin100yrs){
  console.log('Yes, there is at least one book published within the last 100 years');
} else {
  console.log("No, there aren't any books published within the last 100 years");
}
 
//was every book published within the last 100 years?
const withinLast100 = books.every((book)=> currentYear - book.publishDate <= 100);

if(withinLast100) {
  console.log("Yes, everybook is within the last 100 yrs");
} else {
  console.log("No, not every book was published within the last 100 years");
}

//print a list of books that "includes" the genre historical
const historicalBooks = books.filter((book)=> book.genre.includes("historical"));
console.log(historicalBooks);