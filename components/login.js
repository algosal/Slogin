import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { TextInput } from 'react-native-paper';
import authenticate from "../services/authentication";

export default function Thought(props) {

  let [userText, setUserText] = React.useState(null);
  let [passwordText, setPasswordText] = React.useState(null);

  async function parentStateSet() {
    props.setUser(userText);
    let data = await authenticate(userText, passwordText);
    if (userText == null || passwordText == null) {
      alert("Enter the data ");
    }
    else if (data == 0) {
      props.setPer(true);
    } else {
      setUserText("");
      setPasswordText("");
      alert("The Username or Password Enetered is Incorrect");
    }
  }


  return (

    <View style={styles.container}>

      
                    <View style={[{top:50}, styles.box]} >
                      
                    <Image
                            style={styles.tinyLogo}  
                        source={{
                           uri: 'https://salmansaeed.us/brain/brain.png',                           
                            }}
      />
                    </View>

      <Text style={{ width: 350, paddingTop: 100, fontSize: 50, color:'white', justifyContent:'center', textAlign:'center'}}>Log In Focus</Text>

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

    shadowColor: "lightblue",
shadowOffset: {
	width: 0,
	height: 10,
},
shadowOpacity: 0.6,
shadowRadius: 16.00,

elevation: 25,


    borderColor:'blue', 
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',

  },
  boxLogo: {
    width: 150,
    height: 150,
    borderRadius: 50, 
    borderWidth: 5, 
    top:50, 
    shadowOpacity: .8, 
    shadowColor:'blue',
    borderBottomColor:'yellow',
    borderLeftColor: 'green', 
    borderRightColor: 'red',
    borderTopColor:'purple', 
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',

  },
  mylogotext:{
    flex: 1,
    fontSize:50,
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center", 
    textAlignVertical:"center", 
    color: "black", 
  },
  shadowProp: {
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: .8,
    shadowRadius: 100,
  },
   tinyLogo: {
    width: 100,
    height: 100,
  },
 
});
