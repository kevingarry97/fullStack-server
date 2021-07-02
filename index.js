const express = require('express')
const parser = require('body-parser')
const fetch = require('node-fetch') 
const cors = require('cors')
const compression = require('compression');
const helmet = require('helmet');

const app = express()

const apiUrl = 'https://jsonplaceholder.typicode.com/albums'

app.use(cors({origin: '*'}))
app.use(helmet())
app.use(compression())
app.use(parser.json())
app.use(parser.urlencoded({extended: true}))

app.get('/album/:id', async (req, res) => {
    const data = await (await fetch(`${apiUrl}/${req.params.id}/photos`)).json()

    res.send(data)
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on PORT ${port} successfully`))


