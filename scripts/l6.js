function addBook() {
  let title = prompt("Enter the book title:");
  let author = prompt("Enter the author's name:");
  let isReadAnswer = prompt("Have you read this book? yes/no");

  let book = {
    title: title,
    author: author,
    isRead: isReadAnswer.toLowerCase() === "yes"
  };

  library.push(book);
  alert("Book added!");
}