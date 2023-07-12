import {
    bookSection,
    titleText,
    authorText,
    form,
    listbtn,
    addlistbtn,
    contactbtn,
    list,
    newbooks,
    contact,
    date,
} from "./modules/book.js";

class Book {
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
          <button class='remove' type='button' onclick='bookList.remove("${n.id}")'>Remove</button>
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

const bookList = new Book();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  bookList.addBook();
  form.reset();
});

window.addEventListener("load", () => {
  if (localStorage.getItem("jsonLibrary")) {
    bookList.insertHtml();
  }
  list.style.display = "flex";
  newbooks.style.display = "none";
  contact.style.display = "none";
});

listbtn.onclick = () => {
  list.style.display = "flex";
  newbooks.style.display = "none";
  contact.style.display = "none";
  listbtn.style.color = "#375e81";
  addlistbtn.style.color = "inherit";
  contactbtn.style.color = "inherit";
};

addlistbtn.onclick = () => {
  list.style.display = "none";
  newbooks.style.display = "flex";
  contact.style.display = "none";
  addlistbtn.style.color = "#375e81";
  contactbtn.style.color = "inherit";
  listbtn.style.color = "inherit";
};

contactbtn.onclick = () => {
  list.style.display = "none";
  newbooks.style.display = "none";
  contact.style.display = "flex";
  contactbtn.style.color = "#375e81";
  listbtn.style.color = "inherit";
  addlistbtn.style.color = "inherit";
};

import { DateTime } from "./modules/luxon.js";

function clock() {
  const now = DateTime.now();
  date.textContent = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}

setInterval(clock, 1000);
