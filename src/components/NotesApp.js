import React from "react";
import NoteList from "./NoteList";
import {getInitialData} from '../utils/index';
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
  }

  onDeleteHandler(id) {

    // ubah state nya, dengan memfilter array
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({notes});

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
    });

    // console.log(this.state.notes)
  }


  onArchivedHandler(id) {

    const notes = this.state.notes.map((note) => {

      if(note.id === id) {
        return {
          // spread ini sama aja kek = id: note.id, body: note.body, dipara bgitu jadi spread aja, kerluarin nilainya
          ...note,
          archived: !note.archived
        }
      } else {
        return note;
      }

    });

    this.setState({notes});

  }


  render() {
    
    const activeNotes = this.state.notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNotes = this.state.notes.filter((note) => {
      return note.archived === true;
    })

    return (
      <React.Fragment>
        <div className="note-app__header">
          <h1>My Notes</h1>
        </div>

        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler}/>

          <h2>Note Aktif</h2>
          <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler}/>

          <h2>Arsip</h2>
          <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler}/>
        </div>
      </React.Fragment>
    )
  }

}

export default NoteApp;