const getTheTitles = ([...books]) => {
  const Books = [];
  books.forEach(book => {
    Books.push(book.title);
  });

  return Books;
};

module.exports = getTheTitles;
