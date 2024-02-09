import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/blog" exact component={BlogList} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
