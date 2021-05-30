import { Details } from '@material-ui/icons';
import CounterFeature from 'Features/counter';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import './styles.scss';
TodoList.propTypes = {

};

function TodoList(props) {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path="/" component={CounterFeature} exact />
                <Route path={match.path} component={ListPage} exact={true} />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />
            </Switch>
        </>
    );
}

export default TodoList;