import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

export default function MyDialog(props){
  //const [visible, setVisible] = React.useState(true);

  const hideDialog = () => props.inVisible(); 

  return (
    <Provider>
      <View style={{backgroundColor:"cream"}}>
        <Portal>
          <Dialog visible={true} onDismiss={hideDialog}>
            <Dialog.Title style={{color:"orange"}}>Please Consider</Dialog.Title>
            <Dialog.Content>
              <Paragraph style={{color:"red"}}>{props.msgProp}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

