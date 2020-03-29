import React, { Component } from 'react'
import BlocBuilder from 'bloc-builder-react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingModel from './bookingModel'
import { CustomTabBar, ProfileView, CustomLoader } from '../component/customComponents';
import { SafeAreaView } from 'react-native';
import ProfileBloc from '../bloc/profileBloc'
import { loading_profile } from '../utils/Constant';
const Tab = createMaterialTopTabNavigator();
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.profileBloc = new ProfileBloc()
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <BlocBuilder
                    //setting to the BlocBuilder our Subject
                    subject={this.profileBloc.getProfileInfo()}
                    //builder function that will render our JSX when the subject receives a new value
                    builder={(snapshot) => {
                        if (snapshot && snapshot.data) {
                            return (
                                <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} profile={snapshot.data} ProfileView={ProfileView} />}>
                                    <Tab.Screen name="Booking Model" component={BookingModel} />
                                    <Tab.Screen name="Settings" component={BookingModel} />
                                </Tab.Navigator>
                            )
                        } else {
                            return (
                                < CustomLoader title={loading_profile} />
                            )
                        }
                    }} />
            </SafeAreaView>
        )
    }
}