// bring in the Entry model 
const { user } = require('../db');
const mongoose = require('mongoose');
const Entry = require('../db/models/entry-model');


// function to GET entries
getEntries = async (req, res) => {
    const filter = {}

    if (req.query.endTime) {
        filter.endTime = req.query.endTime === "null" ? null : req.query.endTime
    } else {
        filter.endTime = {$ne:null}
    }

    try {
        const entries = await Entry.find(filter)

        return res.status(200).json({
            success: true,
            data: entries
        })
    } catch(error) {
        res.status(500).send(error.message)
    }
}

// function to GET an entry by ID
getEntryById = async (req, res) => {
    try { 
        const id = mongoose.Types.ObjectId(req.params.id)
        const entry = await Entry.findOne({_id: id})

        if (!entry) {
            return res.status(404).json({
                success: false,
                message: 'Entry not found'
            })
        } 
        return res.status(200).json({
            success: true, 
            data: entry
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// function to CREATE Entry 
createEntry = async (req, res) => {
    const body = req.body

    // if not body send response
    if (!body.name || !body.type) { 
        return res.status(400).json({
            success: false, 
            error: 'Missing fields'
        })
    }

    try {
        const entry = new Entry(body)
        await entry.save()
        return res.status(200).json({
            success: true,
            message: 'Entry successful!',
            data: {
                ...entry.toObject()
            }
        })
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// function to UPDATE an existing entry
updateEntry = async (req, res) => {
    const body = req.body

    try { 
        const id = mongoose.Types.ObjectId(req.params.id)
        const entry = await Entry.findOne({_id: id})

        if (!entry) {
            return res.status(404).json({
                success: false,
                message: 'Entry not found'
            })
        } 

        if (body.name) {
            entry.name = body.name
        }

        if (body.type) {
            entry.type = body.type
        }

        if (body.startTime) {
            entry.startTime = body.startTime
        }

        if (body.endTime) {
            entry.endTime = body.endTime
        }

        await entry.save()
        return res.status(200).json({
            success: true,
            message: 'Entry successful!',
            data: {
                ...entry.toObject()
            }
        })
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// function to DELETE an entry
deleteEntry = async (req, res) => {
    try {
        const id = mongoose.Types.ObjectId(req.params.id)
        const entry = await Entry.findOne({_id: id})

        if (!entry) {
            return res.status(404).json({
                success: false,
                message: 'Entry not found'
            })
        } 
        await entry.remove()
        return res.status(200).json({
            success: true,
            message: 'Entry removed!'
        })
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    getEntries,
    getEntryById, 
    createEntry, 
    updateEntry, 
    deleteEntry
}
