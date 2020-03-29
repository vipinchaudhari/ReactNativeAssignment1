import React, { Component, useState, useEffect } from 'react'
import { TextInput, TouchableOpacity, Text, ActivityIndicator, View, Image, AsyncStorage } from 'react-native'
import style from '../style/style'
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient'
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
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
function areEqual(prevProps, nextProps) {
    return false;
  }
export const ProfileView = React.memo(() => {

    const [image, setImage] = useState('');
    var RBSheetRef;
    useEffect(() => {
        AsyncStorage.getItem("PROFILE_IMAGE", (error, image) => {
            console.log("saved image", image)
            if (image) {
                setImage(image)
            }
        })
    });
    
    const openCamera = () => {
        //open camera
        ImagePicker.openCamera({
            cropping: false,
            compressImageQuality: 0.3,
            mediaType: 'photo'
        }).then(image => {
            console.log(image);
            saveImage(image)
        }, (rejected) => {

        }).catch(err => console.log(err.code));
    }
    const openGallery = () => {
        ImagePicker.openPicker({
            cropping: false,
            multiple: false,
            compressImageQuality: 0.3,
            mediaType: 'photo'
        }).then(image => {
            console.log(image);
            saveImage(image)
        }, (rejected) => {

        }).catch(err => console.log(err.code));
    }
    const saveImage = async (image) => {
        AsyncStorage.setItem("PROFILE_IMAGE", image.path);
        setImage(image.path)
    }


    return (

        <View style={{ alignItems: 'center' }}>

            <TouchableOpacity onPress={() => {
                RBSheetRef.open()
            }}>
                <Image source={image ? { uri: `${image}` } : require('../icons/profile_placeholder.png')} style={{ width: 100, height: 100, borderRadius: 40, }} />
                <Text style={{ borderRadius: 3, borderWidth: 2, position: 'absolute', top: 0, right: -40, padding: 2, textAlign: 'center', textAlignVertical: 'center', color: 'white', borderColor: 'white' }}>PRO</Text>
            </TouchableOpacity>

            <Text style={{ color: 'white', margin: 8, fontSize: 20 }}>Bipin Chaudhari</Text>
            <Text style={{ color: 'white', fontSize: 14 }}>Mobile App Developer</Text>

            <RBSheet
                ref={ref => {
                    RBSheetRef = ref;
                }}
                height={170}
                duration={250}
                customStyles={{
                    container: {
                        padding: 8
                    }
                }}
            >
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <Text style={{ color: '#512888', fontSize: 24, fontWeight: 'bold' }}>Image Picker</Text>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => {
                        RBSheetRef.close()
                        openCamera()
                    }}>
                        <Text style={{ color: 'black', fontSize: 18, paddingVertical: 10 }}>Open Camera</Text>
                    </TouchableOpacity>
                    <View style={{ height: 1, backgroundColor: 'grey' }} />
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => {
                        RBSheetRef.close()
                        this.openGallery();
                    }}>
                        <Text style={{ color: 'black', fontSize: 18, paddingVertical: 10 }}>Choose from gallery</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </View >
    )

},areEqual)


export const CustomTabBar = React.memo(({ state, descriptors, navigation, position, ProfileView }) => {
    return (
        <LinearGradient
            useAngle={true}
            angle={45}
            angleCenter={{ x: 0.5, y: 0.75 }}
            colors={['#D836A5', '#512888',]} style={{ height: 300, alignItems: 'center', justifyContent: 'flex-end', }}>
            <TouchableOpacity style={{ position: 'absolute', top: 15, start: 15, width: 30, height: 30, zIndex: 1 }} onPress={() => {
                navigation.openDrawer();
            }} >
                <Image style={{ width: 30, height: 30, }} source={require('../icons/menu.png')} />
            </TouchableOpacity>
            <ProfileView />
            <View style={{ flexDirection: 'row', paddingTop: 20, alignItems: 'flex-end', }}>

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
                                <Text style={{ width: '100%', padding: 8, textAlign: 'center', textAlignVertical: 'center', color: 'white' }}>{label}</Text>
                                <Animated.View style={{ height: height, width: '100%', backgroundColor: 'white', marginBottom: 2 }}></Animated.View>
                            </View>

                        </TouchableOpacity>
                    );
                })}
            </View>
        </LinearGradient>
    );
},areEqual)