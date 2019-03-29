import React from 'react';
import Search from './Search';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars Database</h1>
        <main>
          <Search />
        </main>
      </div>
    );
  }
}