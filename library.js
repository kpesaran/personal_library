console.log('Yo')

//When you enter values in form, it creates a new book object, which is then displayed in own card.


//const book1 = new book('First Book', 'Me', '10', true)
//const book2 = new book('Second Book', 'You', '100', false)
let myLibrary=[]

// function book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.info = function() {
//         if (read === false) {
//         return `${title} by ${author}, ${pages} pages, not read yet`
//     }
//         else if (read === true) {
//             return `${title} by ${author}, ${pages} pages, not read yet`
//         }
//     }
// }

//let author_input = document.querySelector('')

let submit_button = document.getElementById('submit')

submit_button.addEventListener('click', addBooktoLibrary)

function book_add(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if (read === false) {
        return `${title} by ${author}, ${pages} pages, not read yet`
    }
        else if (read === true) {
            return `${title} by ${author}, ${pages} pages, not read yet`
        }
    }
}

let book_counter = 0


function addBooktoLibrary() {
    console.log('I clicked the submit button')
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked
    console.log(title)
    console.log(author)
    console.log(pages)
    console.log(read)

    const book = new book_add(title, author, pages, read)

    myLibrary.push(book)

    console.log(myLibrary)
    return display_card()
}


let container = document.querySelector('.container')


function display_card() {
    myLibrary.forEach(book_element => {
    
        //Create new element
        let book_card = document.createElement('div');
        let book_title = document.createElement('p')
        let book_author = document.createElement('p')
        let book_pages = document.createElement('p')
        let book_read = document.createElement('p')
        let book_remove = document.createElement('button')
        
        
        book_card.style.cssText = 'border: 1px black solid'
        book_card.classList.toggle('card')
    
    
        book_title.textContent = 'Title: ' + book_element.title
        book_author.textContent = 'Author: ' + book_element.author
        book_pages.textContent = 'Pages: ' + book_element.pages
        if (book_element.read === true) {
            book_read.textContent = "You've read this book"
        }
        else if (book_element.read === false){
            book_read.textContent = "You haven't read this book yet"
        }
        container.appendChild(book_card)
        book_card.appendChild(book_title)
        book_card.appendChild(book_author)
        book_card.appendChild(book_pages)
        book_card.appendChild(book_read)
        book_card.appendChild(book_remove)
    })
}




