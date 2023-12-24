const express =require('express');
const router = express.Router()

const{getPeople, createPerson, updatePerson, deletePerson} = require('../controllers/people.js')

// default request
router.get('/', getPeople)

// when client sending a post request, data is usually covered in req.body
router.post('/', createPerson)

// put is a request for update data in server
router.put('/:id', updatePerson)

// delete
router.delete('/:id',deletePerson)

/*
you could also chain the same route path together like this:
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)
*/

module.exports = router