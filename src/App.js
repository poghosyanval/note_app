import React, { useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddNote = () => {
    if (newTitle && newContent) {
      const newNote = {
        id: Math.random(),
        title: newTitle,
        content: newContent,
      };
      setNotes([...notes, newNote]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const handleEditNote = (id, editedTitle, editedContent) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: editedTitle, content: editedContent } : note
    );
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <div>
        <label>Title
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        /></label>
        <label>Description
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        /></label>
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <NoteList
        notes={notes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

export default App;
