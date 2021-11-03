import React from "react";
import { View, Image, ImageBackground, Text } from 'react-native'

import BackgroundGeneric from "./components/backgroundGeneric/BackgroundGeneric";
import { ButtonGeneric } from "./components";

import bg from './assets/imgages/bg.jpg'
import octopusCard from './assets/imgages/octopusCard.png'
import lobster from './assets/imgages/lobster.png'
import murayeel from './assets/imgages/murayeel.png'

const App = () => {
  return (
    <View>

      <BackgroundGeneric
        titlePage='The Circle Of Life'
        source={bg}
        content={
          <>
            <ButtonGeneric style={{ background: 'transparent' }} styleImg={{ width: 100, height: 100 }} source={octopusCard} />
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
              <ButtonGeneric style={{ display: 'flex',  marginRight: 100, alignItems: 'center', justifyContent: 'center', }} styleImg={{ width: 100, height: 100 }} source={lobster} />
              <ButtonGeneric style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} styleImg={{ width: 100, height: 100 }} source={murayeel} />
            </View>
            <ButtonGeneric title='PLAY' />

          </>
        }
      />
    </View>
  );
}

export default App;
