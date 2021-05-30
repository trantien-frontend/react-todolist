import { Button } from '@material-ui/core';
import Header from 'components/Header';
import Albums from 'Features/Albums';
import CounterFeature from 'Features/counter';
import ProductFeature from 'Features/ProductFeature';
import { useSnackbar } from 'notistack';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TodoList from './Features/TodoList';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoList} />
        <Route path="/albums" component={Albums} />
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
