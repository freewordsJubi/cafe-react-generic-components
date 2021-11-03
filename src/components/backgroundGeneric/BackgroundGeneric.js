import React from "react";
import { View, ImageBackground,Text } from 'react-native'
import genericStyle from "../genericStyle";

const BackgroundGeneric = (props) => {
    return (
        <View style={props.container}>
            <ImageBackground style={props.styleImg} source={props.source}>
                <View style={props.contentContainer}>
                    <Text style={props.styleTitle}>{props.titlePage}</Text>
                    {props.content}
                </View>
            </ImageBackground>
        </View>
    )
}

BackgroundGeneric.defaultProps = {
    container:genericStyle.container,
    contentContainer: genericStyle.contentContainer,
    styleImg: genericStyle.imgBg,
    styleTitle: genericStyle.textTitle
}

export default BackgroundGeneric