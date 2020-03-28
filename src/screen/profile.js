import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Weather from './weather'
import { CustomTabBar } from '../component/customComponents';
const Tab = createMaterialTopTabNavigator();
export default class Profile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Tab.Navigator tabBar={(props)=><CustomTabBar {...props}/>}>
                <Tab.Screen name="Home" component={Weather} />
                <Tab.Screen name="Settings" component={Weather} />
            </Tab.Navigator>
        )
    }
}