import React from 'react'
import CardView from 'react-native-cardview'
import { Text, View, Image, ScrollView } from 'react-native'
import style from '../style/style'
import LinearGradient from 'react-native-linear-gradient'
export default class BookingModel extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView style={[style.container, { marginTop: 50 }]}>
                <CardView
                    cardElevation={8}
                    cornerRadius={3}
                    style={{ flexDirection: 'row' }}>
                    <LinearGradient
                        angle={45}
                        angleCenter={{ x: 0.5, y: 0.5 }}
                        colors={['#008000', '#9ACD32',]}
                        style={{ height: 90, aspectRatio: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>20</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>SEPTEMBER</Text>
                    </LinearGradient>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View >
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Available for paid photo shoot</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>Miami Beach, FL</Text>
                        </View>
                    </View>
                    <Text numberOfLines={1} style={{ lineHeight: 40, fontSize: 40, padding: 8, color: '#008000', alignSelf: 'center' }}>+</Text>
                    <View style={{ width: 5, backgroundColor: '#008000' }} />
                </CardView>
                <CardView
                    cardElevation={8}
                    cornerRadius={3}
                    style={{ marginTop: 40, }}>
                    <View
                        style={{ flexDirection: 'row-reverse', }}>
                        <LinearGradient
                            angle={45}
                            angleCenter={{ x: 0.5, y: 0.5 }}
                            colors={['#f22183', '#eb6ba8',]}
                            style={{ height: 90, aspectRatio: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>20</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>SEPTEMBER</Text>
                        </LinearGradient>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <View >
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Booked</Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'grey' }}>Municipio, Rome</Text>
                            </View>
                        </View>
                        <Text numberOfLines={1} style={{ lineHeight: 40, fontSize: 40, padding: 8, color: '#f22183', alignSelf: 'center' }}>√</Text>
                        <View style={{ width: 5, backgroundColor: '#f22183' }} />
                    </View>
                    <View style={{ flexDirection: 'row', margin: 8, }}>
                        <Image style={{ flex: 1, aspectRatio: 1, margin: 5 }} source={require('../icons/sample_map.png')} />
                        <View style={{ width: 3, backgroundColor: '#ededed' }} />
                        <View style={{ flex: 1, marginLeft: 16, marginTop: 16, justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>Distance</Text>
                            <Text style={{ fontSize: 12, color: 'grey' }}>23.6</Text>
                            <Text style={{ fontSize: 12, color: 'black' }}>12.00 - 18:00</Text>
                            <Text style={{ fontSize: 40, color: 'black', alignSelf: 'flex-end' }}>+</Text>
                            <Text style={{ fontSize: 24, color: 'grey', alignSelf: 'flex-end' }}>Book Ticket</Text>
                        </View>
                    </View>
                </CardView>
            </ScrollView>
        )
    }
}