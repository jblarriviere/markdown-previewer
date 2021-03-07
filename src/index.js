import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import marked from 'marked'


class App extends React.Component {

  constructor(props) {
    super(props);
    let placeholder = "# Welcome to my React Markdown Previewer!\r## This is a sub-heading...\r### And here's some other cool stuff:\rHeres some code, `<div></div>`, between 2 backticks.\r```\r// this is multi-line code:\r\rfunction anotherExample(firstLine, lastLine) {\r\tif (firstLine == \'```\' && lastLine == \'```\') {\r\t\treturn multiLineCode;\r\t}\r}\r```\r"
                + "You can also make text **bold**... whoa!\r"
                + "Or _italic_.\r"
                + "Or... wait for it... **_both!_**\r"
                + "And feel free to go crazy ~~crossing stuff out~~.\r\r"
                + "There\'s also [links](https://www.freecodecamp.com), and\r"
                + "> Block Quotes!\r"
                + "- And of course there are lists.\r"
                + "\t- Some are indented\r\r"
                + "And images : ![React Logo w/ Text](https://goo.gl/Umyytc)\r";

    this.state = {
      markdown: placeholder
    };
  }

  updateMarkdown(event) {
    this.setState( {
      markdown: event.target.value
    });
  }


  render()
  {
    return (
      <div className="App">
        <div className="window editor">
          <Toolbar text='Editor' />
          <textarea id="editor" value={this.state.markdown} onChange={this.updateMarkdown = this.updateMarkdown.bind(this)}/> 
        </div>
        <div className="window preview">
          <Toolbar text='Previewer' />
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown, {gfm: true, breaks: true})}} />
        </div>
      </div>
    );
  }
}

const Toolbar = props => {
  return(
    <div className="toolbar">
      <i className="fa fa-times-circle" />
      <i className="fa fa-minus-circle" />
      <i className="fa fa-plus-circle" />
      <span className='title'> {props.text} </span>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
