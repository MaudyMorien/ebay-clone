import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import AddsListContainer from './components/AddsListContainer'
import AddFormContainer from './components/AddFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <Route path="/" exact component={AddsListContainer} />
        <Route path="/" exact component={AddFormContainer} />
      </div>
      </Provider>
    );
  }
}

export default App;
