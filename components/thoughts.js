import React, { Component } from "react";
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback, Vibration  } from "react-native";
import { TextInput, List, Button,r } from 'react-native-paper';
import myThought from "../services/thought";
import MyDialog from "./dialog";
import getResolutions from "./resolutions";

export default function Thought(props) {
  
  let [thought, setThought] = React.useState(null);
  let [thoughtDescription, setThoughtDescription] = React.useState(null);
  let [focusThought, setFocusThought] = React.useState(null);
  let [expanded, setExpanded] = React.useState(false);

  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  let [msgState,setMsgState] =React.useState("No Msg Yet");

  let [listingOfResolutions,setListingOfResolutions] = React.useState(""); 
  
  let propertyNames;
  let propertyValues;
  let arrOfResolutions;


  

  React.useEffect(() => {
    resolution();
  },[]);


  function handlePress(){
    setExpanded(!expanded);
   }


  async function resolution(){ 
  await getResolutions(props.user)
  .then((res)=>
  {
    propertyNames = Object.keys(res);
    propertyValues = Object.values(res);
  
    arrOfResolutions = propertyValues.map((pVals,i)=>{
      return(
      <List.Item
      title={
        <View>
          <Text style={{ color: 'white', }}>{pVals}</Text>
        </View>
      }
      onPress={() => { 
        setExpanded(false);
        setFocusThought(propertyNames[i]); 
        resolution(); 
      }} />)
    });
    

  });


  setListingOfResolutions(arrOfResolutions); 
  }



  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', paddingTop: 20, color: 'orange' }}>Focus</Text>
      <View style={{flexDirection:'row', position:'absolute', top:30, right:5,  }}>
        <Button 
        title="Log Out"
        mode="contained"
        
        contentStyle={{ height: 50, backgroundColor:"red" }}
        labelStyle={{ color: "ivory", fontSize: 14, fontWeight: "bold",  }}

        onPress={()=>props.unsetPer(false)}
        >Log Out</Button>
        </View>
        
      <View style={{ flex: .5, top: 0, width: 350, }}>
      <Text style={{ color: 'orange', margin: 10, }} >Please Enter</Text>
        <TextInput
          label="Thought"
          style={{ marginTop: 10, marginright: 10, marginLeft: 10, }}
          onChangeText={text => {setThought(text)}}
          value={thought}
        />


        <TextInput
          label="Description"
          style={{ marginTop: 10, marginright: 10, marginLeft: 10, height: 100 }}
          multiline
          onChangeText={text => {setThoughtDescription(text)}}
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
                
                <View>{listingOfResolutions}</View>
        
                </List.Accordion>
          </List.Section>
        </View>



        <View style={{top: 120, margin:20,  }}>
          <Button
            title="Focus"
            icon="camera" 
            mode="contained"
        
            contentStyle={{ height: 50, backgroundColor:"brown", }}
            labelStyle={{ color: "white", fontSize: 14, fontWeight: "bold",  }}

  loading={false}


            onPress={async () => {
              if(thought === null || thoughtDescription === null || focusThought === null){
                alert("The Fields are Empty");
              }
              else{
                /*let myThoughtForDB=thought.replace("'","\'");
                let myThoughtForDB_After_Escaping = myThoughtForDB.replace("\"","\\\"")

                let myThoughtDescriptionForDB = thoughtDescription.replace("'","\'");
                let myThoughtDescriptionForDB_After_Escaping = myThoughtDescriptionForDB.replace("\"","\\\"")
                */
    

              let msg = await myThought(props.user, thought, thoughtDescription, focusThought );
              setThought("");
              setThoughtDescription(""); 
              setFocusThought(null); 
              setMsgState(msg); 
              setVisible(true); 
              Vibration.vibrate(1000);
            }
          }}
          >Capture Thought and Focus</Button>
          </View>
          {(visible)?<MyDialog inVisible={hideDialog} msgProp={msgState}/>:<></>}           

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
