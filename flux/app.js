import React from 'react';
import ReactDOM from 'react-dom';
import { ZoidbergEdit, Zoidberg } from './components';

ReactDOM.render(
    <div>
        <ZoidbergEdit></ZoidbergEdit>
        <hr/>
        <Zoidberg></Zoidberg>
    </div>,
    document.getElementById('app')
);
