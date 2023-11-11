import React from 'react';
 
class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputText = event.target.value;
    const remainingChars = this.state.charLimit - inputText.length;

    if (remainingChars >= 0) {
      this.setState({
        title: inputText
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      body: '',
      charLimit: 50,
    });
  }

  render() {
    return (
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa Karakter: {this.state.charLimit - this.state.title.length}</p>
          <input 
            type="text" 
            className="note-input__title" 
            placeholder="Ini adalah judul..." 
            value={this.state.title} 
            onChange={this.onTitleChangeEventHandler} 
            required />
          <textarea 
            className="note-input__body" 
            placeholder="Tuliskan catatanmu disini..." 
            value={this.state.body} 
            onChange={this.onBodyChangeEventHandler} 
            required></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}
 
export default NoteInput;