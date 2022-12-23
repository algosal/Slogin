import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, Button, } from "react-native";
import { TextInput } from 'react-native-paper';
import authenticate from "../services/authentication";

export default function Thought(props) {

  let [userText, setUserText] = React.useState(null);
  let [passwordText, setPasswordText] = React.useState(null);

  async function parentStateSet() {
    let data = await authenticate(userText, passwordText);
    if (userText == null || passwordText == null) {
      alert("Enter the data ");
    }
    else if (data == 0) {
      props.setPer(true);
    } else {
      alert("The Username or Password Enetered is Incorrect");
    }
  }


  return (

    <View style={styles.container}>

      
                    <View style={[styles.shadowProp, styles.box]} >
                      <View style={styles.mylogotext}>
                        <Text style={styles.mylogotext}>S</Text>
                      </View>
                    </View>

      <Text style={{ width: 350, paddingTop: 100, fontSize: 50, color:'white'}}>Log In Focus</Text>

      <View style={{ width: 350, paddingTop: 30, }}>
        <TextInput
          label="username"
          value={userText}
          onChangeText={text => setUserText(text)}
          style={{ margin: 10, }}
        />

        <TextInput
          label="password"
          secureTextEntry={true}
          value={passwordText}
          onChangeText={text => setPasswordText(text)}
          style={{ margin: 10, }}
        />

        <View style={{ top: 10, left:200, width:140,  }}>
          <Button
            title="Log In"
            onPress={parentStateSet}
          /></View>
          
      </View>
    </View>

  );

}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    textAlignVertical: 'center',
    color: 'maroon',
    backgroundColor: 'black',
    paddingTop: StatusBar.height,
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 50, 
    borderWidth: 5, 
    top:50, 
    borderBottomColor:'yellow',
    borderLeftColor: 'green', 
    borderRightColor: 'red',
    borderTopColor:'purple', 
    backgroundColor: "pink",
  },
  mylogotext:{
    fontSize:50,
    top:0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center", 
    color: "green", 
  },
  shadowProp: {
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: .8,
    shadowRadius: 100,
  }, 
 
});
