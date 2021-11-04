import React from "react";
import { View, ImageBackground } from 'react-native'
import genericStyle from "../styles/genericStyle";

const BackgroundGeneric = (props) => {
    return (
        <View style={props.style}>
            <ImageBackground style={props.styleImg} source={props.source}>
                <View style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                }}>
                    <View style={props.stylecontentContainer}>
                        {props.children}
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

BackgroundGeneric.defaultProps = {
    style: genericStyle.container,
    stylecontentContainer: genericStyle.contentContainer,
    styleImg: genericStyle.imgBg,
    styleTitle: genericStyle.textTitle
}

export default BackgroundGeneric