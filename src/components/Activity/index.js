import React, { Component } from 'react';
import { 
    View,
    ActivityIndicator,
 } from 'react-native';
 
import EStyleSheet from 'react-native-extended-stylesheet';

 export default class Activity extends Component {
     render() {
         return (
             <View style={styles.container}>
                 <ActivityIndicator color={"#3fd47f"}/>
             </View>
         );
     }
 }

 const styles = EStyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         backgroundColor: '$themeBg'
     }
 });