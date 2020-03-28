import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
    container: {
        margin: 8,
        flex: 1,
        flexDirection: 'column'
    },
    textInput: {
        marginVertical: 3,
        borderRadius: 5,
        height: 40,
        borderColor: "grey",
        borderWidth: 1
    },
    button: {
        borderRadius: 5,
        marginVertical: 3,
        height: 40,
        backgroundColor: "#1293C5",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tempView: {
        backgroundColor: "#1293C5",
        flex: 0.4,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    tempText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%',
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white'
    },
    weatherInfo: {
        marginTop: 8,
        padding: 8,
        flex: 0.6,
        width: "100%",
        borderColor: '#1293C5',
        borderWidth: 2,
        borderRadius: 5
    },
    cityText: {
        margin: 8,
        fontSize: 44,
        fontWeight: "bold",
        color: "#1293C5",
    },
    dateText: {
        marginStart: 8,
        fontSize: 24,
        fontWeight: "900",
        color: "black",
    },
    countryText: {
        fontSize: 16,
        lineHeight: 50,
        fontWeight: "bold",
        color: "black"
    },
    weatherDetailTextView: {
        alignItems: 'flex-end',
        margin:8
    },
    weatherDetailText: {
        fontSize:14,
        letterSpacing:2,
        lineHeight:25
    }
})