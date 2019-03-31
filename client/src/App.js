import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import AdsListContainer from './components/AdsListContainer'
import AdFormContainer from './components/AdFormContainer'
import AdDetailsContainer from './components/AdDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Route path="/" exact component={AdsListContainer} />
        <Route path="/" exact component={AdFormContainer} />
        <Route path="/ads/:id" exact component={AdDetailsContainer} />
      </div>
      </Provider>
    );
  }
}

export default App
