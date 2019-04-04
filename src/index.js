import React from 'react';
import { render } from 'react-dom'
import App from './app';
import { hot } from 'react-hot-loader';

const root = document.getElementById('root');

const HotApp = hot(module)(App);

render(<HotApp />, root);