const express = require('express')
// console.log(express)

// Initialize an instance of our express server, assigned to "app"
const app = express()


// Creating a route
// First argument is the endpoint that we are making a request to
// Second arg is the callback function that handles the request(req) and response(res)
app.get('/', (req, res) => {
    res.send('This is the index page')
})

// Another route
app.get('/another-route', (req, res) => {
    res.send('This is another route. BOOOOOOM!')
})

// A third route!
app.get('/third', (req, res) => {
    res.send('<h1 style="color: red;">This is a cool route</h1>')
})

app.get('/fourth', (req, res) => {
    res.json({ pokemon: "Pikachu", type: "Electric" })
})


// This line creates a listener, so that our app can be online and listen for requests.
// When we turn on the server it gives us a message in the console letting us know that our server is online.
app.listen(4001, () => {
    console.log(`Server is running on port 4001`)
})