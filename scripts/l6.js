let books = [];

const form = document.querySelector("#book-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const bookList = document.querySelector("#book-list");

function addBook(title, author) {
    const book = {
        title: title,
        author: author,
        isRead: false
    };

    books.push(book);
}

function listBooks() {
    bookList.innerHTML = "";

    books.forEach(function(book) {
        const li = document.createElement("li");

        if (book.isRead === true) {
            li.textContent = book.title + " by " + book.author + " - Read";
        } else {
            li.textContent = book.title + " by " + book.author + " - Not read";
        }

        bookList.appendChild(li);
    });
}

function markAsRead(title) {
    const book = books.find(function(book) {
        return book.title === title;
    });

    if (book) {
        book.isRead = true;
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;

    addBook(title, author);
    listBooks();

    titleInput.value = "";
    authorInput.value = "";
});