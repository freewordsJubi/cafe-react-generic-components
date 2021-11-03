import React from "react";
import {View,ImageBackground} from 'react-native'


const BackgroundGeneric = (props) => {
    return (
        <View>
            <ImageBackground />
        </View>        
    )
}

BackgroundGeneric.defaultProps = {
    style: genericStyle.button,
    styleTitle: genericStyle.text,
}

export default BackgroundGeneric