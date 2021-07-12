import React, { Component } from 'react';
import { render } from 'react-dom';
import AppRouter from './src/routers/app.router';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return <AppRouter/>;
  }
}

render(<App />, document.getElementById('root'));
