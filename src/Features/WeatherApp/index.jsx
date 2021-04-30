import React, { useEffect, useState } from 'react';
import queryString from "query-string";
import PropTypes from 'prop-types';
import WeatherForm from './components/WeatherForm';
import './styles.scss';

WeatherApp.propTypes = {

};
function RangerId() { }
function WeatherApp(props) {
    const api = {
        key: '820519eb9f7c94b30c8e7302785eb6b4',
        baseUrl: 'http://api.openweathermap.org/data/2.5/weather'
    }
    const [filterCity, setFilterCity] = useState({
        q: 'saigon',
    })
    useEffect(() => {
        async function fetchWeatherAPI() {
            try {
                const params = queryString.stringify(filterCity);
                const url = `${api.baseUrl}?${params}&appid=${api.key}`;
                const respone = await fetch(url);
                const responJSON = await respone.json();
                console.log(responJSON);
                const { main, name, weather } = responJSON;
                console.log(main, name, weather);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchWeatherAPI();
    }, [filterCity]);
    const handleChangeFilters = (newCity) => {
        if (newCity === '') return;
        console.log(newCity);
        setFilterCity({
            q: newCity,
        });
    }
    return (
        <div className="weather-main">
            <WeatherForm onSubmit={handleChangeFilters} />
            <div className="weather-main__inner">
                <img src="../../assets/images/weather-snow.webp" alt="" />

            </div>
        </div>
    );
}

export default WeatherApp;