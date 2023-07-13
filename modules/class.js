import { bookSection, titleText, authorText } from "./book.js";
export default class Book {
  constructor() {
    this.bookLibrary = JSON.parse(localStorage.getItem("jsonLibrary")) || [];
    }
  insertHtml() {
    bookSection.replaceChildren();
    this.bookLibrary.forEach((n) => {
      const divContainer = document.createElement("div");
      divContainer.classList.add("book");
      const divDetail = document.createElement("div");
      divDetail.classList.add("bookDetail");
      const pTitle = document.createElement("p");
      pTitle.innerHTML = n.title;
      const pBy = document.createElement("p");
      pBy.innerHTML = "By";
      const pAuthor = document.createElement("p");
      pAuthor.innerHTML = n.author;
      const btnRemove = document.createElement("button");
      btnRemove.classList.add("remove");
      btnRemove.type = "button";
      btnRemove.innerHTML = "Remove";
      btnRemove.addEventListener("click", () => {
        this.remove(n.id);
      });
      divDetail.appendChild(pTitle);
      divDetail.appendChild(pBy);
      divDetail.appendChild(pAuthor);
      divContainer.appendChild(divDetail);
      divContainer.appendChild(btnRemove);
      bookSection.appendChild(divContainer);
    });
  }

  addBook() {
    const bookObject = {};
    bookObject.title = titleText.value;
    bookObject.author = authorText.value;
    bookObject.id = Math.floor(Math.random() * 1000000) + 1;
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

