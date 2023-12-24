const express =require('express');
const router = express.Router()

let {people} =require('../data.js')

router.get('/', (req, res) => {
    res.status(200).json({ success: true,msg:'test get',data: people })
})

/*
when client sending a post request, data is usually covered in req.body
*/
router.post('/', (req, res) => {
    const userName = req.body.name
    if (!userName) {
        return res.status(400).json({ success: false, msg: 'pls provide name value' })
    }

    res.status(201).json({ success: true, person: userName })
})


/*
put is a request for update data in server
*/
router.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const name = req.body.name
    // console.log(id,name)

    // find the person according to the received id(req.params.id)
    const person = people.find((person) => {
        return person.id === id
    })

    if (!person) {
        return res.status(400).json({ success: false, msg: `Bad request: no person with id: ${id}` })
    }

    const newPerson = people.map((person)=>{
        if(person.id === id){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true,data:newPerson})
})

router.delete('/:id',(req,res)=>{
    const id = Number(req.params.id)
    const person = people.find((person)=>person.id === id)
    if(!person)
        res.status(404).json({success:false, msg:`Not Found, no person with id: ${id}`})

    const newPeople = people.filter((person)=>person.id !== id)
    res.status(200).json({success:true, msg:`delete person with id: ${id}`,data:newPeople})

})

module.exports = router