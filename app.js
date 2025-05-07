let container = document.querySelector('.container')
let openDialogBtn = document.querySelector('#openDialogBtn')
const dialog = document.querySelector('#bookDialog')
const form = document.querySelector('form')
const myLibrary = [];

function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error(`use new keyword to set the constructor`)
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.id = crypto.randomUUID()
}
Book.prototype.toggleReadStatus = function () {
    this.readStatus = !this.readStatus
}

function addBookToLibrary(title, author, pages, readStatus) {
    let newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook)
}

let displayBooks = () => {
    container.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        let book_container = document.createElement('h2')
        let removeBtn = document.createElement('button')
        let toggleReadBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'
        toggleReadBtn.textContent = 'Toggle Read'


        let book = myLibrary[i];
        book_container.textContent = book.title + ' by ' + book.author + ' — ' + (book.readStatus ? 'Read' : 'Not Read');

        container.appendChild(book_container)
        container.appendChild(removeBtn)
        container.appendChild(toggleReadBtn)

        removeBtn.addEventListener('click', () => {
            const index = myLibrary.findIndex(item => item.id === book.id);
            myLibrary.splice(index, 1);
            displayBooks();

        })
        toggleReadBtn.addEventListener('click', () => {
            book.toggleReadStatus()
            displayBooks()
        })

    }
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let bookTitle = document.querySelector('#title').value;
    let bookAuthor = document.querySelector('#author').value;
    let bookPages = document.querySelector('#pages').value;
    let bookReadStatus = document.querySelector('#readStatus').checked;


    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookReadStatus)
    displayBooks()
    dialog.close()
})

openDialogBtn.addEventListener('click', ()=>{
    dialog.showModal()
})