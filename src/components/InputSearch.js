import React from "react";

class InputSearch extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Cari note..."/>
      </div>
    )
  }

}

export default InputSearch;