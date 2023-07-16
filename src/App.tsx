
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import Diceone from "../assets/one.png"
import Dicetwo from "../assets/two.png"
import Dicethree from "../assets/three.png"
import Dicefour from "../assets/four.png"
import Dicefive from "../assets/five.png"
import Dicesix from "../assets/six.png"

type DiceProp = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
function Dice({imageUrl}:DiceProp):JSX.Element{
  return(
    <View>
      <Image source={imageUrl} style={styles.diceImage}/>
    </View>
  )
}

function App(): JSX.Element {
  const [dice,setDice] = useState<ImageSourcePropType>(Diceone)
  function generateRandomNumber(){
    const nums = [Diceone,Dicetwo,Dicethree,Dicefour,Dicefive,Dicesix]
    const randomNum:number = Math.floor(Math.random()*6)+1
    setDice(nums[randomNum-1])
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }
  return (
    <SafeAreaView style={[styles.container,styles.mainContainer]}>
      <View style={styles.container}>
        <Dice imageUrl={dice}/>
        <TouchableOpacity onPress={generateRandomNumber} style={styles.buttonContainer}>
          <Text>Roll Dice</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  diceImage:{
    width:200,
    height:200,
    borderRadius:8
  },
  mainContainer:{
    backgroundColor:'#80D8FF'
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    backgroundColor:'#3F51B5',
    width:100,
    justifyContent:'center',
    alignItems:'center',
    margin:20,
    padding:10,
    borderRadius:4
  }
});

export default App;
