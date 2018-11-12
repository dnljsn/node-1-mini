let books = [];
let id = 1;

module.exports = {
    getAllBooks: (req, res) => {
        res.status(200).send(books);
    },
    createBook: (req, res) => {
        console.log(req.body);
        let { title, author } = req.body;
        let newBook = {
            title: title,
            author: author,
            id: id
        }
        id++;
        books.push(newBook);
        res.status(200).send(books);
    },
    updateBook: (req, res) => {
        let index = null;
        books.forEach((book, i) => {
            if (book.id === Number(req.params.id)) index = i;
        })
        books[index] = {
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        };
        res.status(200).send(books);
    },
    deleteBook: (req, res) => {
        let index = null;
        books.forEach((book, i) => {
            if (book.id === Number(req.params.id)) index = i;
        })
        books.splice(index, 1)
        res.status(200).send(books);
    }

}
