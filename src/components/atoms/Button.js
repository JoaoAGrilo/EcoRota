import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default props => {
    return (
        <TouchableOpacity style={style.button} onPress={props.onPress}><Text style={style.buttonText}>{props.buttonText}</Text></TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#006BFF',
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 6,
    },

    buttonText: {
        fontSize: 16,
        fontFamily: "Montserrat-Bold",
        color: '#F7F9FC',
    },
}
)