import React from "react";

function MoveButton({id, onArchive}) {

  return <button type="button" className="note-item__archive-button" onClick={() => onArchive(id)}>Pindahkan</button>

}

export default MoveButton;