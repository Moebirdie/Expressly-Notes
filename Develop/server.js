const express = require('express');
const noteData = require('./db/db.json');
const path = require('path');
const fs = require('fs');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//HTML routes

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// API Routes
app.get('/api/notes', (req, res) => { res.json(noteData) }
);

// returns a specific note

app.get('/api/notes/:title', (req, res) => {
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

// post a new note
app.post('/api/notes', (req,res) => {

 console.log(`${req.method} request received to add a note`);
 
 //deconstruct to create the request body
 const { title, text} = req.body;

 if (title && text) {
  const newNote = {
    title,
    text,
  };

  const response = {
    status: 'success',
    body: newNote,
  };
  
  console.log(response);
  res.status(201).json(response);
} else {
  res.status(500).json('Error posting note');
}
});



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
