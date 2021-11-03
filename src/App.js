import React from "react";
import { ButtonGeneric } from "./components";

import { View, Image, ImageBackground } from 'react-native'

import octopusImg from './assets/imgages/octopus.png'


const App = () => {
  return (
    <View style={{ flex: 1}}>
      <ButtonGeneric
        styleImg={{ width: 50, height: 50 }}
        style={{background:'trasparent'}}
        // title = 'ciao'
        source={octopusImg}
      />
    </View>
  );
}

export default App;
