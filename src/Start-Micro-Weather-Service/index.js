const express = require('express')
const app = express()
const body = require('body-parser')
const request = require('request');

app.set('json spaces', 40);
app.use(body.urlencoded({ extended: true }));
app.use(body.json());

let apiKey = '9342b3ff8ec7ba00d80934235d231a02';
let defaultCity = 'lille';
let openweatherApi = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`

app.get('/', function (req, res) {
    res.send('Weather Api ! Use /cityName to get weather forecast !!')
})

app.get('/:cityName', function (req, res) {

    let cityName = req.params.cityName || defaultCity
    let requestUrl = openweatherApi + cityName;

    request(requestUrl, function (err, response, body) {
        if (err) {
            res.send(err)
        } else {
            try {
                let weather = JSON.parse(body)
                let weatherResponse = {
                    city: weather.name,
                    temp: weather.main.temp,
                    desc: weather.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
                };
                res.json(weatherResponse)
            }
            catch (ex) {
                res.send(ex)
            }
        }
    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})