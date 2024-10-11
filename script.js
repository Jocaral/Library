const myLibrary = [];

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;

}

const btn= document.querySelector('button');

btn.addEventListener('click', () => {

function addBookToLibrary() {
  // do stuff here
const book1= new Book(prompt('Name'),prompt('Author'), prompt('Pages'));
// const book1= new Book('jo','joca', 'jocaral');

myLibrary.push(book1);

const bookCard= document.querySelector('.book-card');
const bookName= bookCard.querySelector('.name');
const bookAuthor= bookCard.querySelector('.author');
const bookPage= bookCard.querySelector('.pages');

bookName.textContent=`Title: ${myLibrary[0].title}`;
bookAuthor.textContent= `Author: ${myLibrary[0].author}`;
bookPage.textContent= `Pages: ${myLibrary[0].pages}`;
}

addBookToLibrary();
})


console.log(myLibrary);



