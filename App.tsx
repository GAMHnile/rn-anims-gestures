/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text, PanResponder} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const leftValue = useState(new Animated.Value(0))[0];
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: (_, gesture)=>{
          pan.setValue({
            x: gesture.dx,
            y: gesture.dy
          })
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  )[0];
  const moveBall = () => {
    // Animated.timing(value, {
    //   toValue: {x: 100, y: 100},
    //   duration: 1000,
    //   useNativeDriver: false,
    // }).start();
    Animated.timing(leftValue, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Animated.View style={[{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'red',
            transform: [{translateX: pan.x},{translateY: pan.y}]
          },
        ]}
          
          {...panResponder.panHandlers}
          >
        
      </Animated.View>
      {/* <TouchableOpacity onPress={moveBall}>
        <Text>Move ball</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default App;
