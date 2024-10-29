
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
  outputBox.innerHTML = "";
  myLibrary.forEach((newbook, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
        <div class="heading">
        <h3>Author : ${newbook.author}</h3>
        <h3>Title : ${newbook.title}</h3>
        </div>

        <div class="content">
        <p>Pages : ${newbook.pages}</p>
       
</button>
        </div>
        
        `;
        outputBox.appendChild(bookCard);
      });
    }

function remove(index) {
      myLibrary.splice(index, 1);
      displayBooks();
    }

