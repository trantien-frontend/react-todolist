import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

WeatherForm.propTypes = {
    onSubmit: PropTypes.func,
};
WeatherForm.defaultProps = {
    onSubmit: null,
}
function WeatherForm(props) {
    const [searchCity, setSearchCity] = useState('');
    const { onSubmit } = props;

    const handelSearchValue = (e) => {
        const value = e.target.value;
        setSearchCity(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return;
        onSubmit(searchCity);
        setSearchCity('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchCity} onChange={handelSearchValue} />
            <button type="submit">GetWeather</button>
        </form>
    );
}

export default WeatherForm;