import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/index';
import About from './Components/About';
import { AddWork, Collections, Authors, Author } from './Containers';

const Blog = () => <p>Blog</p>;
const InReview = () => <p>In review</p>;
const Login = () => <p>Login</p>;

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/collections" component={Collections} />

      <Route path="/authors" component={Authors} />
      <Route path="/author/:authorId/work/:workId" component={Author} />

      <Route path="/addWork" component={AddWork} />

      <Route path="/blog" component={Blog} />
      <Route path="/inReview" component={InReview} />
      <Route path="/addWork" component={AddWork} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default routes;
