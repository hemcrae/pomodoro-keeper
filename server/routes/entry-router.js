const express = require('express');
const router = express.Router();
const EntryCtrl = require('../controllers/entry-ctrl');
const app = express();
const jwtCheck = require('../middlewares/jwtcheck');

router.get('/', jwtCheck, EntryCtrl.getEntries)
router.get('/:id', jwtCheck, EntryCtrl.getEntryById)
router.post('/', jwtCheck, EntryCtrl.createEntry)
router.patch('/:id', jwtCheck, EntryCtrl.updateEntry)
router.delete('/:id', jwtCheck, EntryCtrl.deleteEntry)

module.exports = router;