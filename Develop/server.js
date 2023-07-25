const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');


const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`Data written to ${destination}`)
  );

const readAndAppend = (newNote, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const notes = JSON.parse(data);
      notes.push(newNote);
      writeToFile(file, notes);
    }
  });
};

const readAndFilter = (removeNote, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
  const noteData = JSON.parse(data);
  const newNoteData = [];
    for (let i = 0; i < noteData.length; i++) {
      if (removeNote !== noteData[i].id) 
       newNoteData.push(noteData[i]);
      }  
  writeToFile(file, newNoteData);
}
)};

//HTML routes

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// API Routes
app.get('/api/notes', (req, res) => { 
   // this route sends all notes to the page in a json format
    res.sendFile(path.join(__dirname, 'db/db.json'))
});

// returns a specific note

app.get('/api/notes/:id', (req, res) => {
  const noteData = require('./db/db.json');
  console.log(req.params)
  const requestedId = req.params.id
  for (let i = 0; i < noteData.length; i++) {
    if (requestedId === noteData[i]) {
      return res.json(noteData[i]);
    }
  }
  // if requested note does not exist
  return res.json('no matching note found');
});

//Deletes a note
app.delete('/api/notes/:id', (req, res) => {
  readAndFilter(req.params.id, './db/db.json');
  res.json({message: "item deleted successfully"});
});

// post a new note
app.post('/api/notes', (req,res) => {

 console.log(`${req.method} request received to add a note`);
 
 //deconstruct to create the request body
 const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    
    readAndAppend(newNote, 'db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };
    res.status(201).json(response); 
    } else {
    res.status(500).json('Error adding note');
  }
});


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
