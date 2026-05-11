let library = [];

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

    library.push(book);
}

function listBooks() {
    bookList.innerHTML = "";

    library.forEach(function(book) {
        const li = document.createElement("li");
        const button = document.createElement("button");

        if (book.isRead === true) {
            li.textContent = book.title + " by " + book.author + " - Read ";
        } else {
            li.textContent = book.title + " by " + book.author + " - Not read ";
        }

        button.textContent = "Mark as read";
        button.className = "btn btn-sm btn-success ms-2";

        button.addEventListener("click", function() {
            markAsRead(book.title);
        });

        li.appendChild(button);
        bookList.appendChild(li);
    });
}

function markAsRead(title) {
    const book = library.find(function(book) {
        return book.title === title;
    });

    if (book) {
        book.isRead = true;
        listBooks();
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