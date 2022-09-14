import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View
      style={{
        margin: 50,
        padding:20,
        backgroundColor: 'lightgreen',
      }}>
        <Icon name='rocket' size={100} color="red"/>
      <Text
        style={{fontWeight: 'bold', fontSize: 30, backgroundColor: 'yellow'}}>
        NORMAL
      </Text>
      <Text
        style={{
          fontFamily: 'IndieFlower-Regular',
          fontSize: 30,
          backgroundColor: 'pink',
        }}>
        IndieFlower-Regular
      </Text>
      <Text
        style={{
          fontFamily: 'Pacifico-Regular',
          fontSize: 30,
          backgroundColor: 'skyblue',
        }}>
        Pacifico-Regular
      </Text>
      <Text
        style={{
          fontFamily: 'ShadowsIntoLight-Regular',
          fontSize: 30,
          backgroundColor: 'orange',
        }}>
        ShadowsIntoLight-Regular
      </Text>
    </View>
  );
};

export default App;
