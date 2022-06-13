let myLibrary = [];


let submit_button = document.getElementById('submit');
let add_button = document.getElementById('add-btn')
let book_entry = document.querySelector('.book-entry')

add_button.addEventListener('click', (e) => {
    
    book_entry.style.display = 'flex';
})

function form_display() {
    book_entry.style.display = 'flex'
}

submit_button.addEventListener('click', addBooktoLibrary);

class book_add {
    constructor(title, author, pages, read) {

    
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        if (read === false) {
            return `${title} by ${author}, ${pages} pages, not read yet`;
    }
        else if (read === true) {
            return `${title} by ${author}, ${pages} pages, not read yet`;
        }
    }
}


function addBooktoLibrary() {
    //grab's values entered into the form and creates a new object.
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    const inputs = document.querySelectorAll('input');
    
    if (title === '' || author=== '') {
        return alert('Please name both the Book Title and Author');
        
    }
    else {
        const book = new book_add(title, author, pages, read);

        myLibrary.push(book);
    
        inputs.forEach(input => {
            input.value = '';
        })

        console.log(myLibrary);
        book_entry.style.display='none'
        return display_card();
    }
}


let container = document.querySelector('.container');

let book_counter = 0;

function display_card() {
    myLibrary.forEach(book_element => {
        console.log(book_element.name)
        console.log(myLibrary)
        if (myLibrary.indexOf(book_element) === myLibrary.length - 1) {
            let book_card = document.createElement('div');
            let book_title = document.createElement('p');
            let book_author = document.createElement('p');
            let book_pages = document.createElement('p');
            let book_read = document.createElement('p');
            let book_remove = document.createElement('button');
            let book_toggle = document.createElement('button')
            
            book_remove.classList.toggle('delete-btn')
            book_remove.textContent = 'REMOVE'
            book_toggle.textContent = 'Read'
            book_card.classList.toggle('card');
            
        
            book_title.textContent = 'Title: ' + book_element.title;
            book_author.textContent = 'Author: ' + book_element.author;
            book_pages.textContent = 'Pages: ' + book_element.pages;
            if (book_element.read === true) {
                book_read.textContent = "You've read this book";
            }
            else if (book_element.read === false) {
                book_read.textContent = "You haven't read this book yet";
            }
            container.appendChild(book_card);
            book_card.appendChild(book_title);
            book_card.appendChild(book_author);
            book_card.appendChild(book_pages);
            book_card.appendChild(book_read);
            book_card.appendChild(book_remove);
            book_card.appendChild(book_toggle)
            

            book_counter = book_counter + 1

            book_remove.addEventListener('click',
                function () {
                    console.log('this should remove card')
                    this.closest('div').remove();
                    myLibrary.pop(this)
                });
            
            book_toggle.addEventListener('click', () => {
                if (book_element.read === true) {
                    book_element.read = false
                    book_read.textContent = "You haven't read this book yet";
                    console.log(myLibrary)
                }
                else if (book_element.read === false) {
                    book_element.read = true
                    book_read.textContent = "You've read this book"
                    console.log(myLibrary)
                }
            }
            )
}
})
}



