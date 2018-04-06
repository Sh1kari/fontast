import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Collections from '../Containers/Collections';
import Authors from '../Containers/Authors';
import Footer from './Footer';

const Blog = () => <p>Blog</p>;
const InReview = () => <p>In review</p>;
const AddWork = () => <p>+ Add work</p>;
const About = () => <p>About</p>;
const Login = () => <p>Login</p>;

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/collections" component={Collections} />
            <Route path="/authors" component={Authors} />
            <Route path="/blog" component={Blog} />
            <Route path="/inReview" component={InReview} />
            <Route path="/addWork" component={AddWork} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
