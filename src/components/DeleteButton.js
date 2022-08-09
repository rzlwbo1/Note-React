import React from "react";

function DeleteButton({id, onDelete}) {

  return <button type="butto" className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>

}

export default DeleteButton;