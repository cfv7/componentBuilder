import React from 'react';
import ReactDOM from 'react-dom';
import PlayerSearch from './components/player-search';
import Arsenal from '../arsenal.json'
import './index.css';

ReactDOM.render(
  <PlayerSearch 
    Arsenal={
      Arsenal
    }
  />,
  document.getElementById('root')
);
