import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, Button } from "react-native";
import { TextInput, List } from 'react-native-paper';
import myThought from "../services/thought";

export default function Thought(props) {

  let [thought, setThought] = React.useState(null);
  let [thoughtDescription, setThoughtDescription] = React.useState(null);
  let [focusThought, setFocusThought] = React.useState(null);


  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', paddingTop: 20, color: 'orange' }}>Focus</Text>
      <View style={{flexDirection:'row', position:'absolute', top:30, right:5,  }}>
        <Button 
        title="Log Out"
        onPress={()=>props.unsetPer(false)}
        
        />
        </View>
        
      <View style={{ flex: .5, top: 0, width: 350, }}>
      <Text style={{ color: 'orange', margin: 10, }} >Please Enter</Text>
        <TextInput
          label="Thought"
          style={{ marginTop: 10, marginright: 10, marginLeft: 10, }}
          onChangeText={text => setThought(text)}
          value={thought}
        />


        <TextInput
          label="Description"
          style={{ marginTop: 10, marginright: 10, marginLeft: 10, height: 100 }}
          multiline
          onChangeText={text => setThoughtDescription(text)}
          value={thoughtDescription}
        />


        <View style={styles.myAccordian}>
          <List.Section title=
          {
            <View>
              <Text style={{ color: 'white', }}>Resolutions</Text>
            </View>
          }>

            <List.Accordion
              title="Reverse Polarity by Focus"
              left={props => <List.Icon {...props} icon="equal" />}
              theme={{ colors: { primary: 'black' } }}
              expanded={expanded}
              onPress={handlePress}>
             
              <List.Item
                title={
                  <View>
                    <Text style={{ color: 'white', }}>Concentrate on Present</Text>
                  </View>
                }
                onPress={() => { setFocusThought(5); handlePress(); }} />
              
              <List.Item
                title={
                  <View>
                    <Text style={{ color: 'white', }}>JavaScript</Text>
                  </View>
                }
                onPress={() => { setFocusThought(1); handlePress(); }} />

              <List.Item
                title={
                  <View>
                    <Text style={{ color: 'white', }}>React Native</Text>
                  </View>
                }
                onPress={() => { setFocusThought(2); handlePress() }} />

                
            </List.Accordion>
          </List.Section>
        </View>



        <View style={{top: 120, margin:20,  }}>
          <Button
            title="Focus"
            onPress={async () => {
                  
              if(thought === null || thoughtDescription === null || focusThought === null){
                alert("The Fields are Empty");
              }
              else{
                let msg = await myThought("salman", thought, thoughtDescription, focusThought );
              setThought("");
              setThoughtDescription(""); 
              setFocusThought(null); 
              alert(msg); 
              }
            }}
          />
        </View>

      </View>
    </View>
  );

}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlignVertical: 'center',
    color: 'maroon',
    backgroundColor: 'black',
  },
  myAccordian: {
    height: 150,
    marginTop:0, marginright: 10, marginLeft: 10,
  }
});
