import React from 'react'
import { View, TextInput, StyleSheet} from 'react-native'


export default props => {
    return (
        <View style={style.inputContainer}>
            <TextInput  placeholder={props.placeholder} />
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: {
        width: "100%",
        borderBottomWidth: 1,
        marginBottom: 40,
    },
}
)