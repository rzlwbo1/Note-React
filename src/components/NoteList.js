import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete, onArchive, }) {

  console.log(notes);

  if(notes.length !== 0) {

    return (
      <div className="notes-list">
        {
          notes.map((note) => <NoteItem {...note} key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive}/>)
        }
      </div> 
    )
  } else {
    return <p className="notes-list__empty-message">Tidak ada note</p>
  }

}


export default NoteList;