import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // when importing always use this as an example//

//this is where I will render the App.jsx component//
ReactDOM.render(
    <App
    string = 'THis is REact' />,
    document.getElementById('root')
)