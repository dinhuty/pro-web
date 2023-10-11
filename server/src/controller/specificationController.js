const Specification = require('../models/specificationModel')

const addSpecs = async (req, res) => {
    try{
     
    }catch(error) {
        res.status(500).json({error: "Add error"})
    }
}

module.exports = {
    addSpecs
}