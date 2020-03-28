import React from 'react'
import { TextInput, TouchableOpacity, Text, ActivityIndicator, View } from 'react-native'
import style from '../style/style'
export const CustomInputText = (props) => {
    return (
        <TextInput {...props} style={style.textInput} />
    )
}

export const CustomButton = (props) => {

    return (
        <TouchableOpacity style={style.button} activeOpacity={0.8} onPress={() => props.onPress()}>
            <Text style={style.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export const CustomLoader = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator
                size='large' {...props} />
            <Text style={{ margin: 8 }}>{props.title}</Text>
        </View>
    )
}