import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, Button } from "react-native";
import {TextInput, List} from 'react-native-paper';

export default function Thought() {

  let [thought,setThought]=React.useState(null); 
  let [thoughtDescription,setThoughtDescription]=React.useState(null); 
  let [focusThought, setFocusThought] = React.useState(null);


  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (

     <View style={styles.container}>
      <Text style={{fontSize:30, fontWeight:'bold', paddingTop:20,}}>Focus</Text>
        <View style={{flex:1, top:0, width: 350, }}>
      <Text style={{color:'white',  }} >Please Enter</Text>
          <TextInput
      label="Thought"
      value={thought}
      onChangeText={text => setThought(text)}
      style={{margin:5,}}
    />

    
<TextInput 
      label="Description"
      multiline
      value={thoughtDescription}
      onChangeText={text => setThoughtDescription(text)}
      style={{margin:5, height:100}}
    />


      <View style={styles.myAccordian}>
        <List.Section title="Resolutions">
      <List.Accordion
        title="Reverse Polarity by Focus"
        left={props => <List.Icon {...props} icon="equal" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="JavaScript"  onPress={() => setFocusThought("JavaScript")}/>
        <List.Item title="React Native" onPress={() => {setFocusThought("React Native")}} />
        
      </List.Accordion>
    </List.Section>
    </View>



    <View style={{flex:.4, top:60,  }}>

<Button
title="Focus"
onPress={() => {
alert(focusThought);
}}
/>
</View>
    </View>
    </View>

  ); 

}

let styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems:'center',
    textAlignVertical:'center', 
    color: 'maroon', 
    backgroundColor: 'white', 
  },
  myAccordian:{
    height: 250, 
  }
});
