import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';
import Background from '../bten-icons/order-thank-background.png';
import HamburgerButton from '../bten-icons/burger.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import QRCode from 'react-native-qrcode-svg';

const {width, height} = Dimensions.get('window');
export default function OrderDone() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.container}
      imageStyle={styles.background}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={HamburgerButton} style={styles.hamButton} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.qrContainer}>
          <QRCode
            value={'https://xdevochka.uz/'}
            size={width / 3}
            color={COLORS.black}
            backgroundColor={'transparent'}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
    aspectRatio: 1.3,
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  hamButton: {
    aspectRatio: 1.5,
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: 'AlumniSans-Bold',
    alignSelf: 'center',
    marginBottom: 50,
  },
  qrContainer: {
    marginTop: 150,
  },
});
