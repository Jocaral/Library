const myLibrary = [];

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;

}

const btn= document.querySelector('button');

let count=0;

btn.onclick= function (){
  ++count;
  
}

btn.addEventListener('click', () => {

function addBookToLibrary() {
  // do stuff here



const book1= new Book(prompt('Title'),prompt('Author'), prompt('Pages'));


myLibrary.push(book1);

const containerBooks=document.querySelector('.container-books');

const bookCard= document.createElement('div');
bookCard.classList.add("book-card");
containerBooks.appendChild(bookCard);

const bookTop= document.createElement('div');
const bookTitle= document.createElement('div');
const bookAuthor= document.createElement('div');
const bookPage= document.createElement('div');

bookTop.classList.add("top");
bookCard.appendChild(bookTop);

bookTitle.classList.add("name");
bookCard.appendChild(bookTitle);

bookAuthor.classList.add("author");
bookCard.appendChild(bookAuthor);

bookPage.classList.add("pages");
bookCard.appendChild(bookPage);

// Print results


bookTitle.textContent=`Title: ${myLibrary[0].title}`;
bookAuthor.textContent= `Author: ${myLibrary[0].author}`;
bookPage.textContent= `Pages: ${myLibrary[0].pages}`;



bookTop.textContent=`Book ${count}`;

}


addBookToLibrary();
});


console.log(myLibrary);



