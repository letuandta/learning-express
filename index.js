const  express = require('express')
const app = express()
const port = 2002

app.get('/', (req, res) => {
    res.header({
        "Content-Type": "text/html"
    })
    res.send("<h1>Hello world</h1>")
})

app.listen(port)