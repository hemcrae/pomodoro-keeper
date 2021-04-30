// bring in the Entry model 
const { user } = require('../db');
const Entry = require('../db/models/entry-model');

// function to create Entry 
createEntry = (req, res) => {
    const body = req.body

    // if not body send response
    if (!body) { 
        return res.status(400).json({
            success: false, 
            error: 'Missing fields'
        })
    }

    const entry = new Entry(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'error'
        })
    }

    entry 
        .save()
        // res for successful entry
        .then(() => {
            return res.status(200).json({
                success: true,
                id: user._id,
                message: 'Entry successful!'
            })
        })
        // res for failed entry
        .catch(() => { 
            return res.status(400).json({
                success: false,
                message: 'Error'
            })
        })

}