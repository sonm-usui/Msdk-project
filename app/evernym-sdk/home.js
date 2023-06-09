// @flow

/*
 * Here is you can customize Home view.
 * */

// text which will be used for the header.
import React from "react";
import { View, Image, StyleSheet } from 'react-native';
export const HEADLINE = null

// component to be displayed in cases of no recent notifications.
export const HomeViewEmptyState = null

// flag indicating whether you want to show the history of events.
export const SHOW_EVENTS_HISTORY = true

// flag indicating whether you want to show camera button.
export const SHOW_CAMERA_BUTTON = true

export const CustomHomeScreen = null
// custom component to use for Home screen rendering (instead of predefined one)
// export const CustomHomeScreen  = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/icon.png')}
//         style={styles.image}
//       />
//     </View>
//   )
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//   },
// });

