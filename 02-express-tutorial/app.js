// Please note that names within '{}' have to be exactly the same as they are in 'data.js'
const express = require ('express');
const app = express()

//routes
const peopleRouter = require('./routes/people')
const auth = require('./routes/auth')

const PORT = 5000


// // import two middleware
// const { logger } = require('./logger.js');
// const { authorize } = require('./authorize.js')

//app will use all the files in this folder, otherwise see 02-http-app.js
app.use(express.static('./methods-public'))

// parse encoded form data of the request body
app.use(express.urlencoded({ extended: false }))
// parse json of the request body
app.use(express.json())


// two routers
app.use('/api/people',peopleRouter)
app.use('/login',auth)

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`))


// // below could seen as a ROUTE, which defines the code to execute when we reveice certain URL
// app.get('/', (req, res) => {
//     console.log('get received');
//     res.send('<h1>HI HOME PAGE</h1><a href="/api/products">Products Here</a>')
// })


// // if i put middleware here, then these procedures only works for this route.
// app.get('/api/products', (req, res) => {
//     console.log(req.name)
//     const newProduct = products.map((product) => {
//         const { id, name, image } = product
//         return { id, name, image }
//     })
//     res.json(newProduct)
// })

// /* 
// Route Parameters1: 
// add '/:XXXX', you can name XXX whatever you want but make it meaningful as usual
// automatically parse the request URL to find what behind 'products/',
// and set it to an attribute of req.params called 'productID'.
// */
// app.get('/api/products/:productID', (req, res) => {

//     const reqID = Number(req.params.productID); // Optional chaining to safely access value
//     const singelProduct = products.find((product) => product.id === reqID)
//     if (singelProduct) {
//         res.json(singelProduct)
//     } else {
//         res.status(404).send('<h2>Product Does Not Exist</h2><a href="/">Back to Home</a>')
//     }
// })

// /*
// Query parameters:
// read this parameter by 'req.query'
// typically at the end of the URL, start with '?', seperate with '&'
// */
// app.get('/api/v1/query', (req, res) => {
//     const { search, limit } = req.query

//     let sortedProducts = [...products] // to make a shallow copy of the original array!!!(not changing the original one)
//     if (search) {
//         sortedProducts = products.filter(product => product.name.startsWith(search))
//     }
//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }
//     if (sortedProducts.length < 1) {
//         /*
//             res.status(200).send('No products matched your search')
//             or you can do the following, it's really up to you.
//         */
//         return res.status(200).json({ success: true, data: [] })
//     } else {
//         return res.status(200).json(sortedProducts)
//     }
// })

