const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const ctrl = require('./controllers/controller')
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../build"));

app.get('/api/books', ctrl.getAllBooks)

app.post('/api/books', ctrl.createBook)

app.put('/api/books/:id', ctrl.updateBook)

app.delete('/api/books/:id', ctrl.deleteBook)

app.listen(port, () => console.log("Houston we have port " + port))