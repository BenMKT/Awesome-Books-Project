import { bookSection, titleText, authorText } from "./book.js";

export default class Book {
  constructor() {
    this.bookLibrary = JSON.parse(localStorage.getItem("jsonLibrary")) || [];
  }

  insertHtml() {
    bookSection.innerHTML = "";
    this.bookLibrary.forEach((n) => {
      bookSection.innerHTML += `<div class='book'>
        <div class='bookDetail'>
          <p>"${n.title}"</p>
          <p>by</p>
          <p>${n.author}</p>
        </div>    
          <button id="${n.id}" class='remove' type='button'>Remove</button>
      </div>`;
    });

    
  }

  addBook() {
    const bookObject = {};
    bookObject.title = titleText.value;
    bookObject.author = authorText.value;
    bookObject.id = (titleText.value + authorText.value).replace(/\s/g, "");
    this.bookLibrary.push(bookObject);
    localStorage.setItem("jsonLibrary", JSON.stringify(this.bookLibrary));
    this.insertHtml();
  }

  remove(idParameter) {
    this.bookLibrary = this.bookLibrary.filter(
      (book) => book.id !== idParameter
    );
    localStorage.setItem("jsonLibrary", JSON.stringify(this.bookLibrary));
    this.insertHtml();
  }
}


