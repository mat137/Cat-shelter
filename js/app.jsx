import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
      <div className="yellow">
        <App />
        </div>,
        document.getElementById('app')
    );
});
