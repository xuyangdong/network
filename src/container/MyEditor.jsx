import React from 'react'
import {Editor, EditorState,getDefaultKeyBinding} from 'draft-js';

function myKeyBindingFn(e: SyntheticKeyboardEvent): string {
  //回车键发送
  if (e.keyCode === 13) {
    return 'myeditor-send';
  }
  return getDefaultKeyBinding(e);
}

const MyEditor = React.createClass({
  getInitialState(){
    return {
      editorState:EditorState.createEmpty()
    }
  },
  componentDidMount(){
    this.refs.myEditor.focus()
  },
  handleKeyCommand(command: string): DraftHandleValue {
    if (command === 'myeditor-send') {
      // Perform a request to save your contents, set
      // a new `editorState`, etc.
      this.props.onSubmit(this.state.editorState.getCurrentContent().getPlainText())
      this.setState({
        editorState:EditorState.createEmpty()
      })

      return 'handled';
    }
    return 'not-handled';
  },
  render(){
    return (
      <Editor
        ref='myEditor'
        placeholder='开始聊天吧……'
        editorState={this.state.editorState}
        onChange={editorState => {this.setState({editorState})}}
        keyBindingFn={myKeyBindingFn}
        handleKeyCommand={this.handleKeyCommand}
        />
    );
  }
})

export default MyEditor
