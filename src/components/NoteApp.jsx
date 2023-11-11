import React from 'react';
import NoteAppBody from './NoteAppBody';
import { getInitialData } from '../utils/data';
import NoteAppHeader from './NoteAppHeader';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: '',
    }

    this.onDeletehandler = this.onDeletehandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onDeletehandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => note.id === id ? {...note, archived: true} : note);
    this.setState({ notes });
  }

  onActiveHandler(id) {
    const notes = this.state.notes.map((note) => note.id === id ? {...note, archived: false} : note);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false
          }
        ]
      }
    });
  }

  onSearchNoteHandler(query) {
   this.setState({
      query: query,
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader searchNote={this.onSearchNoteHandler} />
        <NoteAppBody
          notes={this.state.notes}
          onDelete={this.onDeletehandler}
          onArchive={this.onArchiveHandler}
          onActive={this.onActiveHandler}
          addNote={this.onAddNoteHandler} 
          query={this.state.query}
        />
      </>
    )
  }
}

export default NoteApp;