import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OpenAPI, TodoService } from './api';

// Proxy must be added before base URL so we avoid the CORS issue when developing locally.
const corsProxyUrl = 'http://localhost:8081/';
OpenAPI.BASE = corsProxyUrl + 'http://localhost:8080'

function App() {

  // Testing TodoService.
  const fetchTodos = async () => {
    const todos = await TodoService.getTodosPaged(0, 2);
    console.log(todos);
  }

  fetchTodos().then();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
