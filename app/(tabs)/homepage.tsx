import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Card, Icon, Avatar, Button } from 'react-native-elements';
import React from 'react';

export default function TabOneScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.title} darkColor='030303'>CardPilot</Text>
      {/* //<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}



<Text style={styles.mini}>Find the perfect credit card tailored to your financial needs and goals with Card Pilot, the smart choice for managing your finances. </Text>
      <Button
          //icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{ borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0, padding: 7, width:250,}}
          title='Explore'
        />



  {/* //END       */}
    </View>
  );
}

const defaultProps = {
  text: 'CardPilot',
};
//***************Style******************** *//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor : '#ADD8E6',
    padding: 52, 
  },
  
  title: {
    color: '#030303',
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 500,
    backgroundColor : '#ADD8E6',
  },

mini: {
  color: '#030303',
  fontSize: 16,
  fontFamily: 'Roboto',
lineHeight: 124,
},
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
