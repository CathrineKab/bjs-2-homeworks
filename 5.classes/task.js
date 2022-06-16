class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
	this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

    fix() {
    this.state *= 1.5; //увеличивает в 1,5 раза
  }
	
  set state(number) {
	if (number < 0) {
	this.state = 0;
   } if (number > 100) {
	   this.state = 100;
   } else {
		this._state = number;
   }
  }

  get state() {
  	return this._state;
  }
}

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
	super (name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount, state, type) {
	super (name, releaseDate, pagesCount, state, type);
      this.author = author;
      this.type = "book";
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount, state, type) {
      super (author, name, releaseDate, pagesCount, state, type);
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor (author, name, releaseDate, pagesCount, state, type) {
      super (author, name, releaseDate, pagesCount, state, type);
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor (author, name, releaseDate, pagesCount, state, type) {
      super (author, name, releaseDate, pagesCount, state, type);
      this.type = "detective";
   }
}


// Задача 2

class Library  {
	constructor (name, books) {
		this.name = name;
		this.books = [];
	}

	 addBook(book) {
	 if (book.state > 30) {
	 this.books.push(book);   
	   }
	 }

	findBookBy = function (type, value) {
 	 let findBook = this.books.find(item => item[type] === value);

      if (findBook) {
         return findBook;
      } else {
         return null;
      }
	}

   giveBookByName = function (bookByName) {
   let findName = this.books.findIndex(item => item.name === bookByName);

   if (findName > -1) {
      return this.books.splice(findName, 1) [0];
   } else {
      return null;
   }
 }

}
