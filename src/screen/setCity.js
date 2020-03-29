import React, { Component } from 'react'
import { SafeAreaView, View, TextInput, Button, Alert } from 'react-native'
import style from '../style/style'
import { CITY_NAME, STATE_NAME, COUNTRY_NAME, SUBMIT } from '../utils/Constant'
import { CustomInputText, CustomButton } from '../component/customComponents'
import weatherBloc from '../bloc/weatherBloc'
export default class SetCity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
            state: '',
            country: ''
        }
        this.weatherBloc = new weatherBloc();
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={style.container}>
                    <CustomInputText
                        placeholder={CITY_NAME}
                        value={this.state.city}
                        onChangeText={(text) => this.setState({ city: text })} />
                    <CustomInputText
                        placeholder={STATE_NAME}
                        value={this.state.state}
                        onChangeText={(text) => this.setState({ state: text })} />
                    <CustomInputText
                        placeholder={COUNTRY_NAME}
                        value={this.state.country}
                        onChangeText={(text) => this.setState({ country: text })} />
                    <CustomButton
                        title={SUBMIT}
                        onPress={() => {
                            this.weatherBloc.fetchWeatherInfo((error) => {
                                if (!error) {
                                    
                                    this.props.navigation.goBack()
                                } else {
                                    Alert.alert(error)
                                }
                            }, this.state.city, this.state.state, this.state.country)
                        }} />
                </View>
            </SafeAreaView>
        )
    }
}