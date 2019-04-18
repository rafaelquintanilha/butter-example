import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route path="/blog/:slug" render={Post} />
            </Switch>
          </main> 
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
