import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Thought from './components/thoughts';
import Login from './components/login'; 


/**
 * 
 * @returns 
 * the circumstances I am in
 * problem endangerment level right now

 */

export default function App() {
  let [permissionsByServer, setPermissionsByServer] = useState(null);
  let [userName, setUserName] = useState(null);

  return (
    <View style={styles.container}>
        {(permissionsByServer==true)
        ?<Thought unsetPer={setPermissionsByServer} user={userName}/>:<Login setPer={setPermissionsByServer} setUser={setUserName}/>}
        <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white',     
  },
});
