import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from '../utils/index'
import NoteInput from "./NoteInput";
import InputSearch from "./InputSearch";

class NoteApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {

    // ubah state nya, dengan memfilter array
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({notes});
    // console.log(this.state.notes);

  }

  onAddNoteHandler({title, body}) {

    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          }
        ]
      }
    })

  }

  render() {
    return (
      <React.Fragment>
        <div className="note-app__header">
          <h1>My Notes</h1>
          <InputSearch />
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler}/>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
        </div>
      </React.Fragment>
    )
  }

}

export default NoteApp;