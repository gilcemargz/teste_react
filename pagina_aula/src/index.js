import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Gilcemar'
var element = <h1>Hello, {name}</h1>

const user = {
  firstName: 'Gilcemar',
  lastName: 'Guizzo Zanette'
}

function formatName(parametros) {
  return parametros.firstName + ' ' + parametros.lastName
}

element = <h1> Hello, {formatName(user)}</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
);


reportWebVitals();
