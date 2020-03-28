import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingModel from './bookingModel'
import { CustomTabBar,ProfileView } from '../component/customComponents';
const Tab = createMaterialTopTabNavigator();
export default class Profile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Tab.Navigator tabBar={(props)=><CustomTabBar {...props} ProfileView={(props)=><ProfileView/>}/>}>
                <Tab.Screen name="Booking Model" component={BookingModel} />
                <Tab.Screen name="Settings" component={BookingModel} />
            </Tab.Navigator>
        )
    }
}