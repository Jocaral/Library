const myLibrary = [];

function Book(title, author, pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read= read;

}

const createABook = document.getElementById("createABook");
const newBookDialog = document.getElementById("newBookDialog");
const outputBox = document.querySelector(".output");
const confirmBtn = newBookDialog.querySelector("#confirmBtn");
newBookDialog.returnValue = "initialValue"

function openCheck(newBookDialog) {
  if (newBookDialog.open) {
    outputBox.innerText = "Dialog open";
  } else {
    outputBox.innerText = "Dialog closed";
  }
};
function printBook(myLibrary){
  bookTitle.textContent=`Title: ${myLibrary[0].title}`;
  bookAuthor.textContent= `Author: ${myLibrary[0].author}`;
  bookPage.textContent= `Pages: ${myLibrary[0].pages}`;
  }
  

createABook.addEventListener("click", () => {
  newBookDialog.showModal();
  openCheck(newBookDialog);
})

newBookDialog.addEventListener("close", (e) => {

  // const bookTop= document.createElement('div');
  // function addBookToLibrary(){
    openCheck(newBookDialog)
    printBook(myLibrary)
  } 

)

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  const book1= new Book(title.value,author.value, pages.value)
  myLibrary.push(book1);
  newBookDialog.close();
  ;
  // printBooks();
});

const bookTitle= document.querySelector(".bookTitle");
const bookAuthor= document.querySelector(".bookAuthor");
const bookPage= document.querySelector(".bookPage");



// bookTitle.textContent='a';
// bookTitle.innerText='b';




