import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../ReduxToolkit/Counter/counterSlice';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
})

CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const classes = useStyles();

    //step-4: useSelect => Get State from store 

    const dispatch = useDispatch();
    const counter = useSelector(state => state.count);

    const handleIncrease = () => {
        const actions = increase();
        console.log(actions);
        dispatch(actions);
    }
    const handleDecrease = () => {
        const actions = decrease();
        console.log(actions);
        dispatch(actions);
    }

    return (
        <div>
            Counter : {counter}
            <Button className={classes.root} onClick={handleIncrease}> Increase </Button >
            <Button className={classes.root} onClick={handleDecrease}> Decrease </Button >
        </div>
    );
}

export default CounterFeature;