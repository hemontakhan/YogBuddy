import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

import Mind from './Screens/Mind';
import Yoga from './Screens/Yoga'

export default class App extends React.Component{
    render(){
     return(
         <View>
           <AppContainer/>
           <Image>
             source:{"./assets/health.jpg"}
           </Image>
         </View>
     )
    }
}

var AppNavigator = createSwitchNavigator({
    
    Mind: Mind,
    Yoga: Yoga,

  });
  
  const AppContainer = createAppContainer(AppNavigator);
  