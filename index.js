// Creating a server only using Node.js
/*
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html')
    read.pipe(res)
})

server.listen(3000)
console.log(`Server running on ${3000}`);
*/

// Example of routing
/*
app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/about', (req, res) => {
    res.send('About section')
})

app.get('/projects', (req, res) => {
    res.send('Projects section')
})

// In case the route doesn't match with any, similar to 404 page.
app.use((req, res) => {
    res.send('Page not found')
})
*/

// Using GET, POST, PUT and DELETE
/*
app.get('/products', (req, res) => {
    res.send('List of products')
})

app.post('/products', (req, res) => {
    res.send('Creating products')
})

app.put('/products', (req, res) => {
    res.send('Updating products')
})

app.delete('/products', (req, res) => {
    res.send('Removing products')
})

app.patch('/products', (req, res) => {
    res.send('Updating 1 product')
})
*/

/*
// To avoid 'undefined' we use express.text to translate the body
app.use(express.text())
// For json formats
app.use(express.json())
// For a form format
app.use(express.urlencoded({ extended: false }))


app.post('/products', (req, res) => {
    console.log(req.body);
    res.send('Creating products')
})


app.post('/register', (req, res) => {
    console.log(req, res);
    res.send('Creating new user')
})
*/

/*
app.get('/page/:username', (req, res) => {
    console.log(req.query);
    res.send(`Hello ${req.params.username}`)
})

app.get('/add/:a/:b', (req, res) => {
    //const result = parseInt(req.params.a) + parseInt(req.params.b)
    const {a, b} = req.params
    res.send(`Result: ${parseInt(a) + parseInt(b)}`)
})

app.get('/page/:username/photo', (req, res) => {
    if (req.params.username === "Dave") {
        return res.sendFile('./escanor.jpg', {
            root: __dirname
        })
    }

    res.send('Not authorized user')
})
*/

/*
Middleware
app.use((req, res, next) => {
    if (req.query.login === 'userAuth') {
        next()
    } else {
        res.send('Not authorized')
    }
})
*/


// Creating a server using Express
const express = require('express')
const path = require('path')

const app = express()

const userRotes = require('./src/routes/users.js')
userRotes(app)

const homeRoutes = require('./src/routes/home.js')
app.use(homeRoutes)

// Middleware
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Method: ${req.method}`);
    next()
})

// console.log(__dirname);

app.use('/public', express.static(path.join(__dirname, "src/public")))


app.listen(3000)
console.log(`Server running on ${3000}`);
