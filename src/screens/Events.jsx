import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import Background from '../bten-icons/events-background-image.png';
import HamburgerButton from '../bten-icons/burger.png';
import {useNavigation} from '@react-navigation/native';
import Valentine from '../bten-icons/valentine-icon.png';
import Japan from '../bten-icons/japan-culture-icon.png';
import Games from '../bten-icons/table-games-icon.png';
import {COLORS} from '../helpers/customColor';

const {height} = Dimensions.get('window');
export default function Events() {
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

      <TouchableOpacity
        onPress={() => navigation.navigate('Valentine')}
        style={[
          styles.buttonRow,
          {marginTop: Platform.OS === 'ios' ? height / 4.6 : height / 4.2},
        ]}>
        <Image source={Valentine} style={styles.image} />

        <View>
          <Text style={styles.title}>День влюбленных</Text>

          <Text style={styles.date}>14.02.2024</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Japan')}
        style={[
          styles.buttonRow,
          {marginTop: Platform.OS === 'ios' ? height / 15 : height / 16},
        ]}>
        <Image source={Japan} style={styles.image} />

        <View>
          <Text style={styles.title}>Фестиваль {'\n'} японской культуры</Text>

          <Text style={styles.date}>22.02.2024</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Games')}
        style={[
          styles.buttonRow,
          {marginTop: Platform.OS === 'ios' ? height / 15 : height / 17},
        ]}>
        <Image source={Games} style={styles.image} />

        <View>
          <Text style={styles.title}>Вечер настольных игр</Text>

          <Text style={styles.date}>25.02.2024</Text>
        </View>
      </TouchableOpacity>
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
  buttonRow: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    height: Platform.OS === 'ios' ? 80 : 70,
    width: Platform.OS === 'ios' ? 80 : 70,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  date: {
    fontSize: 20,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.black,
    textAlign: 'center',
  },
});
