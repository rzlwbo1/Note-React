import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete}) {

  return (
    <React.Fragment>
      <h2>Note Aktif</h2>
      {
        notes.length != 0 ?
        <div className="notes-list">
          {
            notes.map((note) => <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note}/>)
          }
        </div>
        :
        <p className="notes-list__empty-message">Tidak ada note</p>
      }
      
    </React.Fragment>
  );

}

export default NoteList;