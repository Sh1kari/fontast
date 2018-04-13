import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/index';
import Collections from './Containers/Collections';
import Authors from './Containers/Authors';
import Author from './Containers/Author';
import About from './Components/About';

const Blog = () => <p>Blog</p>;
const InReview = () => <p>In review</p>;
const AddWork = () => <p>+ Add work</p>;
const Login = () => <p>Login</p>;

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/collections" component={Collections} />

      <Route path="/authors" component={Authors} />
      <Route path="/author/:id" component={Author} />

      <Route path="/blog" component={Blog} />
      <Route path="/inReview" component={InReview} />
      <Route path="/addWork" component={AddWork} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default routes;
