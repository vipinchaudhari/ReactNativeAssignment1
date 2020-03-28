import React from 'react'
import { TextInput, TouchableOpacity, Text, ActivityIndicator, View } from 'react-native'
import style from '../style/style'
import Animated from 'react-native-reanimated';
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

export const CustomTabBar = ({ state, descriptors, navigation, position }) => {
    return (
        <View>
            
            <View style={{ height:250, flexDirection: 'row', paddingTop: 20, alignItems:'flex-end', backgroundColor:'red' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    // modify inputRange for custom behavior
                    const inputRange = state.routes.map((_, i) => i);
                    const height = Animated.interpolate(position, {
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 3 : 0)),
                    });

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, }}>

                            <View>
                                <Text style={{ width: '100%', padding: 8, textAlign: 'center', textAlignVertical: 'center' }}>{label}</Text>
                                <Animated.View style={{ height: height, width: '100%', backgroundColor: '#1293C5' }}></Animated.View>
                            </View>

                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}