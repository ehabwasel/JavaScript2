/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  
  */
 const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  }
];

function createBookList(books) {
  const ul = document.createElement("ul");
  document.querySelector("#bookList").appendChild(ul);
   
 
  
  
  for (let i = 0; i <books.length; i++){
     const li = document.createElement("li");
    const para = document.createElement("P");
    para.innerText = `${books[i].title} By ${books[i].author}`;
    li.appendChild(para);
    li.style.width="350px"
    const img = document.createElement("img");
    img.style.width="300px"
    li.appendChild(img);
    li.style.margin = "5px"
    li.style.listStyle = "none"
    
      img.src =`image${i+1}.jpg`;
      
    
    
if ( books[i].alreadyRead) {
    li.style.background = "green";
  }
  else {
    li.style.background = "red";
  }
    ul.appendChild(li);
    ul.style.display = "flex"

  }
  return ul;
}


let ul = createBookList(books);

document.querySelector("#bookList").appendChild(ul);


