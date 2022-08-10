import React from "react";

class NoteInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 50,
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTextareaChange = this.onTextareaChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }


  onTitleChange(ev) {

    const max = 50;
    const titleInput = ev.target.value.slice(0, max);
    const titleInputLength = titleInput.length;

    let count = max - titleInputLength;

    if(count == 0) {
      this.setState(() => {
        return {
          title: titleInput,
          maxChar: 0
        }
      })
    } else {
      this.setState((prevState) => {
      
        return {
          title: ev.target.value,
          maxChar: max - titleInputLength
        }
      })
    }
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
          <p className="note-input__title__char-limit">Sisa Karakter : {this.state.maxChar}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul..." required value={this.state.title} onChange={this.onTitleChange} />
          <textarea className="note-input__body" placeholder="tulis penjelasan note kamu" value={this.state.body} onChange={this.onTextareaChange}></textarea>
          <button type="submit">Tambah Note</button>
        </form>
      </div>
    );
  }

}


export default NoteInput;