const express =require('express');
const router = express.Router()

// make sure all req go through logger firstly, authorize secondly, and then been sent to route for response
// app.use([logger, authorize])

router.post('/', (req, res) => {
    const userName = req.body.name
    if (!userName) {
        return res.status(404).send('No name')
    }
    res.status(200).send(`Welcome ${userName}`)
})


module.exports = router

