import React from 'react'

import { TouchableOpacity, Text, ImageBackground } from 'react-native'
import genericStyle from "../styles/genericStyle";

const ButtonGeneric = (props) => {

    const handleCallback = () => {
        props.callBackPress()
    }
    return (
        <TouchableOpacity
            style={props.style}
            onPress={handleCallback}
        >
            <Text style={props.styleTitle}>{props.title}</Text>
            <ImageBackground style={props.styleImg} source={props.source} />
            {props.children}
        </TouchableOpacity>
    )
}

ButtonGeneric.defaultProps = {
    style: genericStyle.button,
    styleTitle: genericStyle.text,
    styleImg: genericStyle.img
}
export default ButtonGeneric