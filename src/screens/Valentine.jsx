import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../bten-icons/background.png';
import {useNavigation} from '@react-navigation/native';
import HamburgerButton from '../bten-icons/burger.png';

const {height, width} = Dimensions.get('window');
export default function Valentine() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.background}
      imageStyle={styles.backgroundImage}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={HamburgerButton} style={styles.hamButton} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>
      <Text style={styles.date}>14.02.24</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width + 5,
    height: height + 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
    paddingHorizontal: 15,
  },
  hamButton: {
    aspectRatio: 1.5,
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  backgroundImage: {
    resizeMode: 'stretch',
    paddingBottom: 50,
    marginLeft: -2,
  },
  main: {
    flex: 1,
    paddingTop: 60,
  },
  backIcon: {
    height: 30,
    width: 30,
    marginTop: 30,
    marginLeft: 20,
  },
  date: {
    fontFamily: 'AlumniSans-ExtraBold',
    fontSize: 30,
    color: '#FFFFFF',
    position: 'absolute',
    right: 25,
    top: 150,
    transform: [{rotate: '-15deg'}],
  },
});
