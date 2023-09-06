const myLibrary = [];

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return "The " + this.title + " by " + this.author + "," + " " + this.pages + ", " + this.read;
    }
}
function addBookToLibrary(){
    //myLibrary.push(newbook)
}