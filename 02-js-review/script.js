const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);

const { title, author, genres, publicationDate, pages, hasMovieAdaptation } =
  book;

console.log(title, author);
console.log(genres);

const [primaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",

  // updating an existing property
  // pages: 1000,

  // removing a property
  //, hasMovieAdaptation: null
};
updatedBook;

const summary = `${title} is a ${pages}-page long book, published in ${
  publicationDate.split("-")[0]
}. The author is ${author}. The book has ${
  hasMovieAdaptation ? "a movie adaptation." : "no movie adaptation."
}`;
summary;

const pangeRange = pages > 1000 ? "thats a long book" : "thats not a long book";
pangeRange;

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

console.log(hasMovieAdaptation && "This book has a movie adaptation");
console.log(false && "This book has a movie adaptation");
console.log(false || "This book has a movie adaptation");
// ?? when first operand is null or undefined, it will return the second operand
console.log(hasMovieAdaptation ?? "This book has a movie adaptation");

function getTotalReviews(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviews(book));

const books = getBooks();

const titles = books.map((b) => b.title);
console.log(titles);

const essentialData = books.map((b) => ({
  title: b.title,
  author: b.author,
  reviewsCount: getTotalReviews(b),
}));
essentialData;

const longBooks = books.filter((b) => b.pages > 500);
longBooks;

const adventureBooks = books
  .filter((b) => b.genres.includes("adventure"))
  .map((b) => b.title);
adventureBooks;

const pagesAllBooks = books.reduce((acc, b) => acc + b.pages, 0);
pagesAllBooks;

const arr = [3, 7, 1, 9, 6];
arr.sort();
arr;

const newArr = arr.slice().sort().reverse();
arr;
newArr;

const sortedbyPages = books.sort((a, b) => b.pages - a.pages);
sortedbyPages;
