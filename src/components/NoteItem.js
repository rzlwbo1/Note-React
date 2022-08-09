import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemButtons from "./NoteItemButtons";


function NoteItem({title, createdAt, body, id, onDelete}) {
  
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body}/>
      <NoteItemButtons id={id} onDelete={onDelete}/>
    </div>
  );

}

export default NoteItem;