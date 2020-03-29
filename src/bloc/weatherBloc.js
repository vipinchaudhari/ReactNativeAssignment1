import * as rxjs from 'rxjs'
import { WEATHER_API, provide_city_name } from '../utils/Constant'
import { AsyncStorage } from 'react-native'
//initialize the subject with initial value
weatherInfo = new rxjs.BehaviorSubject()
class WeatherBloc {

    setWeatherInfo = (weather) => {
        console.log("setWeatherInfo", JSON.stringify(weather))
        weatherInfo.next(weather)

    }

    getWeatherInfo = () => {
        return weatherInfo;
    }

    fetchWeatherInfo = (callback, cityName, state, country) => {
        //fetch weather api here
        let API;
        if (cityName) {
            API = `${WEATHER_API}&q=${cityName}${state ? `,${state}` : ''}${country ? `,${country}` : ''}`
        } else {
            callback && callback(provide_city_name)
            return
        }
        console.log("API: " + API)
        return fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log("API response: " + JSON.stringify(json))
                if (json.cod == 200) {
                    callback && callback();
                    this.setCity(cityName)
                    this.setWeatherInfo(json)
                } else {
                    callback && callback(error.message)
                }
            }).catch((error) => {
                callback && callback(error.message)
            })
    }
    setCity = (city) => {
        AsyncStorage.setItem("city", city);
    }
    getCity = () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem("city", (error, city) => {
                if (city) {
                    resolve(city)
                } else {
                    reject(error)
                }
            })
        })
    }
}

export default WeatherBloc