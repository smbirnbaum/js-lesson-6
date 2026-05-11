let books = [];

const form = document.querySelector("#book-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const bookList = document.querySelector("#book-list");

function showBooks() {
    bookList.innerHTML = "";

    books.forEach(function(book) {
        const li = document.createElement("li");
        li.textContent = book.title + " by " + book.author;
        bookList.appendChild(li);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;

    const book = {
        title: title,
        author: author
    };

    books.push(book);

    showBooks();

    titleInput.value = "";
    authorInput.value = "";
});