import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Global from './styles/global';
import HomePage from './pages/People/people.page';
import NavigationBar from './components/NavBar/navigationBar.component';
import Categories from './pages/Categories/categories.page';
import Category from './pages/category/category.page';
import Search from './pages/Search/search.page';

function App() {
  return (
    <Provider store={store}>
      <Global />
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={Categories} />
          <Route path="/category/:name" component={Category} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
