import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";


function NoteItemButtons({id, onDelete}) {

  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete}/>
      {/* <ArchiveButton /> */}
    </div>
  )

}

export default NoteItemButtons;