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

// function to update an existing entry
updateEntry = async (res, req) => {
    const body = req.body
    
    if (!body) { 
        return res.status(400).json({
            success: false, 
            error: 'Missing fields'
        })
    }
    
    Entry.findByIdAndUpdate({_id: req.params.id}, (error, entry) => {

        const body = req.body 
        const entry = Entry(body)

        if (error) {
            return res.status(400).json({
                error,
                message: 'Entry not found'
            })
        }

        entry.name = body.name
        entry.type = type 
        entry.startTime = startTime
        entry.endTime = endTime

        entry
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: entry._id,
                    message: 'Entry Updated'
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error, 
                    message: 'Error updating entry'
                })
            })

    })
}

deleteEntry = (req, res) => {

    Entry.findByIdAndDelete({_id: req.params.id}, (error, entry) => {
        if (error) {
            return res.status(400).json({
                success: fail,
                error: error
            })
        } else {
            return res.status(200).json({
                success: true, 
                data: entry
            })
        } 
    })
}
