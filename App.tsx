import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Thought from './components/thoughts';
import Login from './components/login'; 


export default function App() {
  let [permissionsByServer, setPermissionsByServer] = useState(null);
  return (
    <View style={styles.container}>
        {(permissionsByServer==true)?<Thought/>:<Login setPer={setPermissionsByServer}/>}

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
