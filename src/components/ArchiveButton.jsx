import React from 'react';

function ArchiveButton({ id, archived, onArchive, onActive }) {
  const textButton = archived? 'Pindahkan' : 'Arsipkan';
  return (
    <button 
      className="note-item__archive-button" 
      onClick={() => (archived ? onActive(id) : onArchive(id))}>{textButton}
    </button>
  );
}

export default ArchiveButton;