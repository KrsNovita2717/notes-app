import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';

function NoteAppBody({ notes, onArchive, onDelete, onActive, addNote, query }) {
  const activeNote = notes.filter((note) => {
    return (
      !note.archived &&
      note.title.toLowerCase().includes(query.toLowerCase().trim())
    );
  });

  const archivedNote = notes.filter((note) => {
    return (
      note.archived &&
      note.title.toLowerCase().includes(query.toLowerCase().trim())
    );
  });

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={activeNote} onArchive={onArchive} onDelete={onDelete} onActive={onActive} />
      <h2>Arsip</h2>
      <NoteList notes={archivedNote} onArchive={onArchive} onDelete={onDelete} onActive={onActive} />
    </div>
  );
}

export default NoteAppBody;