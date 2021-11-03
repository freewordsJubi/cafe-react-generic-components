import React from 'react'

import { TouchableOpacity, Text, ImageBackground } from 'react-native'
import genericStyle from '../genericStyle'

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
        </TouchableOpacity>
    )
}

ButtonGeneric.defaultProps = {
    style: genericStyle.button,
    styleTitle: genericStyle.text,

}
export default ButtonGeneric