import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, Vibration, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'


export default function App() {

  const [bgColor,setBgColor] = useState("#123")

  const getColor = () => {
    let color = "#"
    const hexValue = "ABCDEF9876543210"

    for (let i = 0; i < 6; i++) {
      color += hexValue.charAt(Math.floor(Math.random() * hexValue.length))
    }

    setBgColor(color)
  }
  return (
    <>
      <StatusBar backgroundColor={bgColor}/>
        <View style={[styles.screen,{backgroundColor:bgColor}]}>
            <TouchableOpacity style={[styles.btn,]} onPress={getColor}>
              <Text>
                Change Bg
              </Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center"
  },
  btn:{
    marginBottom:70,
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"#000",
    paddingHorizontal:50,
    paddingVertical:20,
    borderRadius:10,
    backgroundColor:"#123"
  },
})