import React, { Component } from 'react'
import { View, SafeAreaView, Text, Image, TouchableOpacity } from 'react-native'
import BlocBuilder from 'bloc-builder-react'
import moment from 'moment'
import style from '../style/style'
import { TEMP_ICON, TEMP_HI, TEMP_LO, HUMIDITY, WIND, WIND_UNIT, SUN_RISE, SUN_SET, FORECAST, loading_weather, DEFAULT_CITY } from '../utils/Constant'
import WeatherBloc from '../bloc/weatherBloc'
import { CustomLoader } from '../component/customComponents'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        //dddd, MMMM Do YYYY	
        this.weatherBloc = new WeatherBloc();
    }
    componentDidMount() {
        this.weatherBloc.fetchWheatherInfo(null, DEFAULT_CITY)
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <BlocBuilder
                    //setting to the BlocBuilder our Subject
                    subject={this.weatherBloc.getWeatherInfo()}
                    //builder function that will render our JSX when the subject receives a new value
                    builder={(snapshot) => {
                        // console.log("snapshot" + snapshot.data + snapshot.data !=null)

                        if (snapshot.data) {
                            let weather = snapshot.data;
                            return (

                                <View style={style.container}>
                                    <View style={style.tempView}>
                                        <TouchableOpacity style={{ position: 'absolute', top: 15, start: 15, width: 30, height: 30, zIndex: 1 }} onPress={() => {
                                            this.props.navigation.openDrawer();
                                        }} >
                                            <Image style={{ width: 30, height: 30, }} source={require('../icons/menu.png')} />
                                        </TouchableOpacity>

                                        <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={style.tempText}>{weather.main.temp}<Text>{TEMP_ICON}</Text></Text>

                                    </View>
                                    <View style={style.weatherInfo}>
                                        <Text style={style.cityText}>
                                            {weather.name}
                                    <Text style={style.countryText}> {weather.sys.country} </Text>
                                        </Text>
                                        <Text style={style.dateText}>
                                            {`${new Date(weather.dt*1000).toLocaleString()}`}
                                    </Text>
                                        <View style={style.weatherDetailTextView}>
                                            <Text style={style.weatherDetailText}>
                                                {weather.weather[0].main}
                                        </Text>
                                            <Text style={style.weatherDetailText}>
                                                {`${TEMP_HI}${weather.main.temp_max}${TEMP_ICON}`}
                                                <Text>
                                                    {`${TEMP_LO}${weather.main.temp_min}${TEMP_ICON}`}
                                                </Text>
                                            </Text>
                                            <Text style={style.weatherDetailText}>
                                                {`${HUMIDITY}${weather.main.humidity}%`}
                                            </Text>
                                            <Text style={style.weatherDetailText}>
                                                {`${WIND}${weather.wind.speed}${WIND_UNIT}`}
                                            </Text>
                                            <Text style={style.weatherDetailText}>
                                                {`${SUN_RISE}${new Date(weather.sys.sunrise*1000).toLocaleTimeString()}`}
                                            </Text>
                                            <Text style={style.weatherDetailText}>
                                                {`${SUN_SET}${new Date(weather.sys.sunset*1000).toLocaleTimeString()}`}
                                            </Text>
                                            <Text style={style.weatherDetailText}>
                                                {`${FORECAST}${weather.weather[0].description}`}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        } else {
                            return (
                                <CustomLoader
                                    animating={true}
                                    title={loading_weather} />
                            )
                        }

                    }} />
            </SafeAreaView>
        )
    }
}