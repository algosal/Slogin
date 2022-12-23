import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, Button, Platform } from "react-native";
import {TextInput, List} from 'react-native-paper';

export default function Thought(props) {
    
  let [userText,setUserText]=React.useState(null); 
  let [passwordText,setPasswordText]=React.useState(null); 

  function parentStateSet(){
    if(passwordText=="salman"){
        props.setPer(true)
        }else{
            alert("The Password Enetered is Incorrect");
        }
    }


  return (

     <View style={styles.container}>
      <Text style={{width: 350, paddingTop:100, fontSize:50  }}>Log In Focus</Text>

      <View style={{width: 350, paddingTop:30, }}>
      <TextInput
        label="username"
        value={userText}
        onChangeText={text => setUserText(text)}
        style={{margin:5,}}
      />

    <TextInput
        label="password"
        secureTextEntry={true}
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
        style={{margin:5,}}
      />

 <View style={{top:20,}}>

<Button
title="Log In"
onPress={parentStateSet}
/>
</View>
    </View>
    </View>

  ); 

}

let styles = StyleSheet.create({
  container:{
    flex: 1, 
    flexDirection:'column', 
    alignItems:'center',
    textAlignVertical:'center', 
    color: 'maroon',
    backgroundColor: 'white', 
    paddingTop : StatusBar.height, 
  },

});
