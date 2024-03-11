import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../helpers/customColor';

export default function CustomButton({text, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 10,
    position: 'absolute',
    bottom: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '65%',
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: COLORS.black,
  },
  text: {
    color: COLORS.black,
    fontSize: 20,
    fontFamily: 'AlumniSans-Bold',
  },
});
