import * as rxjs from 'rxjs'
import { WEATHER_API, provide_city_name } from '../utils/Constant'
//initialize the subject with initial value
wheatherInfo = new rxjs.BehaviorSubject()
class WheatherBloc {

    setWheatherInfo = (wheather) => {
        console.log("setWheatherInfo", JSON.stringify(wheather))
        wheatherInfo.next(wheather)
        
    }

    getWeatherInfo = () => {
        return wheatherInfo;
    }

    fetchWheatherInfo = (callback, cityName, state, country) => {
        //fetch wheather api here
        let API;
        if (cityName) {
            API = `${WEATHER_API}&q=${cityName}${state ? `,${state}` : ''}${country ? `,${country}` : ''}`
        } else {
            callback && callback(provide_city_name)
        }
        console.log("API: " + API)
        return fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log("API response: " + JSON.stringify(json))
                callback && callback();
                this.setWheatherInfo(json)
            }).catch((error) => {
                callback && callback(error)
            })
    }
}

export default WheatherBloc