
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

function Book(title, author, pages, read) {
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
  let statusRead = document.getElementById("read").checked;

  // let status = statusRead ? "Read" : "Not-Read";

  const newBook = new Book(title, author, pages, statusRead );

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

    const deleteBook = document.createElement("button");
    deleteBook.classList.add("delete-book");
    deleteBook.onclick = removeBook;

    bookTitle.textContent = `Author : ${newbook.author}`;
    bookAuthor.textContent = `Title : ${newbook.title}`;
    bookPage.textContent = `Pages : ${newbook.pages}`;
    deleteBook.textContent = 'Delete';
       
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPage);
    bookCard.appendChild(deleteBook);

    const readBtn = document.createElement('button');
    readBtn.classList.add('readBtn');
    bookCard.appendChild(readBtn);
    if(newbook.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }
    
    outputBox.appendChild(bookCard);

    //add toggle ability to each book 'read' button on click
    readBtn.addEventListener('click', () => { 
      newbook.read = !newbook.read; 
      displayBooks();
  }); 

      });
    }

    function removeBook(index) {
      myLibrary.splice(index, 1);
      displayBooks();
    }

    
    
  



