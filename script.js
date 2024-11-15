
const createABook = document.getElementById("createABook");
const newBookDialog = document.getElementById("newBookDialog");
const outputBox = document.querySelector(".output");
const confirmBtn = newBookDialog.querySelector("#confirmBtn");
const closeBtn = document.getElementById("closeBtn");
const form = document.querySelector("form");

// open dialog to Add a book

createABook.addEventListener("click", () => {
  newBookDialog.showModal();
})

// close dialog When adding a book

closeBtn.addEventListener("click", (e) => {
  newBookDialog.close();
});

//Adding a book
form.addEventListener("submit", addBookToLibrary);

const myLibrary = [];

function Book(title, author, pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read= read;
}

function addBookToLibrary(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  // let statusRead = document.getElementById("Read").checked;

  // let status = statusRead ? "Read" : "Not-Read";

  const newBook = new Book(title, author, pages);

  myLibrary.push(newBook);
  newBookDialog.close();
  form.reset();

  displayBooks();
}

function displayBooks() {
  outputBox.textContent = "";
  myLibrary.forEach((newbook, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");

    const bookPage = document.createElement("div");
    bookPage.classList.add("book-page");

    bookTitle.textContent = `Author : ${newbook.author}`;
    bookAuthor.textContent = `Title : ${newbook.title}`;
    bookPage.textContent = `Pages : ${newbook.pages}`;
       
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPage);
    
    outputBox.appendChild(bookCard);
      });
    }

function remove(index) {
      myLibrary.splice(index, 1);
      displayBooks();
    }

