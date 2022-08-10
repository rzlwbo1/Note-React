import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import MoveButton from "./MoveButton";

function NoteItemButtons({id, onDelete, onArchive, archived}) {

  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete}/>
      {
        archived == false ?
        <ArchiveButton id={id} onArchive={onArchive}/>
        :
        <MoveButton id={id} onArchive={onArchive}/>
      }
    </div>
  )

}

export default NoteItemButtons;