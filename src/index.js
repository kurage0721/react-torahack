import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export {default as Article} from './Article';
export {default as Title} from './Title';
export {default as Content} from './Content';
export {default as Textinput} from './Textinput';
export {default as Counter} from './Counter';
export {default as ToggleButton} from './ToggleButton';
export {default as PublishButton} from './PublishButton';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


