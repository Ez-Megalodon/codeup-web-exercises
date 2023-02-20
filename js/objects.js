(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Ezra",
        lastName: "Marama"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function (){
        console.log(`Hello from ${person.firstName} ${person.lastName}`);
    };
    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach((shopper) => {
        if (shopper.amount > 200){
            let discount = (shopper.amount * .12).toFixed(2);
            let discountedAmount = shopper.amount - discount;
            console.log(`${shopper.name} spent: $${shopper.amount.toFixed(2)}
            Discounted: $${discount}. Total amount owed: $${discountedAmount.toFixed(2)}`);
        } else {
            console.log(`${shopper.name} spent: $${shopper.amount.toFixed(2)}
        This did not qualify for the discount. Total amount owed: $${shopper.amount}`);
        }
    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books1 = [
        {
            title: "The Booklet of Harman",
            author: {firstName: "Ezra", lastName: "Marama"}
        },
        {
            title: "Tales From The Ether",
            author: {firstName: "Jacbo", lastName: "Hooley"}
        },
        {
            title: "Why My Plants Won't Grow",
            author: {firstName: "Brendan", lastName: "Clifford"}
        },
        {
            title: "To The Moon & Back",
            author: {firstName: "Bobby", lastName: "Bootlegger"}
        },
        {
            title: "Frog's and Why They Are Superior",
            author: {firstName: "Joe", lastName: "Froggerson"}
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books1.forEach((book, i ) =>{
        console.log(`Book # ${i}`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    console.log('--------------------------------------------------------');
    console.log("BONUS CHALLENGE");
    console.log('--------------------------------------------------------');

    const createBook = (title, author) => {
        let splitName = author.split(" ")
        return {
            title: title,
            author: {firstName: splitName[0], lastName: splitName[1]}
        };
    };

    let newBook = createBook("Book of Dreams", "Ryan James");
    console.log(newBook.author.firstName, newBook.author.lastName);

    let books = [
        createBook("The Booklet of Harman", "Ezra Marama"),
        createBook("Tales From The Ether", "Jacob Hooley"),
        createBook("Why My Plants Won't Grow", "Brendan Clifford"),
        createBook("To The Moon & Back", "Bobby Bootlegger"),
        createBook("Frog's and Why They Are Superior", "Joe Froggerson")
    ]

    function showBookInfo(books) {
        books.forEach((book, i) => {
            console.log(`Book # ${i}`);
            console.log(`Title: ${book.title}`);
            console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
        })
    }

    showBookInfo(books);

})();