import React from "react";

class NoteInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTextareaChange = this.onTextareaChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }


  onTitleChange(ev) {
    this.setState((prevState) => {
      return {
        title: ev.target.value
      }
    })
  }

  onTextareaChange(ev) {
    this.setState((prevState) => {
      return {
        body: ev.target.value
      }
    })
  }

  onSubmitForm(ev) {
    ev.preventDefault();
    this.props.addNote(this.state);
    console.log(this.props)
  }


  render() {
    return (
      <div className="note-input">
        <h2>Buat Note Baru ✏️</h2>
        <form onSubmit={this.onSubmitForm}>
          <p className="note-input__title__char-limit">Sisa Karakter : 50</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul..." required value={this.state.title} onChange={this.onTitleChange} />
          <textarea className="note-input__body" placeholder="tulis penjelasan note kamu" value={this.state.body} onChange={this.onTextareaChange}></textarea>
          <button type="submit">Tambah Note</button>
        </form>
      </div>
    );
  }

}


export default NoteInput;