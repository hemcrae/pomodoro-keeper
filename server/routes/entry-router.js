const express = require('express');
const EntryCtrl = require('../controllers/entry-ctrl');
const router = express.Router();
const app = express();

router.get('/', EntryCtrl.getEntries)
router.get('/:id', EntryCtrl.getEntryById)
router.post('/', EntryCtrl.createEntry)
router.patch('/:id', EntryCtrl.updateEntry)
router.delete('/:id', EntryCtrl.deleteEntry)

module.exports = router;