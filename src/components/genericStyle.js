import React from "react";
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    contentContainer:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '80%',
        height: '100%',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0099FF',
        width: '100%',
        padding: 5
    },
    img: {
        with: 0,
        height: 0
    },
    imgBg: {
        height: Dimensions.get('window').height * 0.999
    },
    textTitle: {
        fontSize: 30,
        textAlign:'center',
        color: '#fff'
    }
})
