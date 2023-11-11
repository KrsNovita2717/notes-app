import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this);
  }

  onQueryChangeHandler(event) {
    const query = event.target.value;

    this.setState({
      query: query,
    });

    this.props.searchNote(query);
  }

  render() {
    return (
      <div className="note-search">
        <input 
          type="search"
          placeholder="Cari catatan..."
          value={this.state.query}
          onChange={this.onQueryChangeHandler}
        />
      </div>
    )
  }
}

export default NoteSearch;