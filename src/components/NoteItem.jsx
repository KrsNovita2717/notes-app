import React from 'react';
import NoteItemContent from './NoteItemContent';
import { showFormattedDate } from '../utils/data';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive, onActive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={showFormattedDate(createdAt)} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton 
          id={id} 
          archived={archived}
          onArchive={() => onArchive(id)} 
          onActive={() => onActive(id)}
           />
      </div>
    </div>
  );
}

export default NoteItem;