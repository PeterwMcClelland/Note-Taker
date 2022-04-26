const router = require("express").Router();

const { notes } = 
require('../../db/db.json');

const { noteCreateNewNote, noteDeleteNote } =
require('../../lib/notesFunctions');

router.get('/notes', (_req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = noteCreateNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;