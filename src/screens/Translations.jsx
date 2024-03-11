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
import {useNavigation} from '@react-navigation/native';
import Background from '../bten-icons/translations-background-image.png';
import HamburgerButton from '../bten-icons/burger.png';
import {COLORS} from '../helpers/customColor';

const {height} = Dimensions.get('window');
export default function Translations() {
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

      <Text style={styles.title}>Ближайшие трансляции</Text>

      <View>
        <View style={styles.card}>
          <View>
            <Text style={styles.date}>20.02</Text>
            <Text style={styles.hour}>23:00</Text>
          </View>

          <View style={styles.match}>
            <Text style={styles.matchText}>Inter - Athletic</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.date}>21.02</Text>
            <Text style={styles.hour}>23:00</Text>
          </View>

          <View style={styles.match}>
            <Text style={styles.matchText}>Napoli - Barcelona</Text>
          </View>
        </View>

        <View
          style={[styles.card, {marginTop: Platform.OS === 'ios' ? 65 : 45}]}>
          <View>
            <Text style={styles.date}>05.03</Text>
            <Text style={styles.hour}>22:00</Text>
          </View>

          <View style={styles.match}>
            <Text style={styles.matchText}>Bayern - Lazio</Text>
          </View>
        </View>

        <View
          style={[styles.card, {marginTop: Platform.OS === 'ios' ? 65 : 45}]}>
          <View>
            <Text style={styles.date}>13.03</Text>
            <Text style={styles.hour}>23:00</Text>
          </View>

          <View style={styles.match}>
            <Text style={styles.matchText}>Athletico - Inter</Text>
          </View>
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
  title: {
    fontSize: 30,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 40,
  },
  card: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 58 : 45,
  },
  match: {
    borderBottomWidth: 3,
    borderColor: COLORS.main,
    paddingVertical: 4,
  },
  matchText: {
    fontSize: 42,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  date: {
    fontSize: 42,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    textAlign: 'left',
  },
  hour: {
    fontSize: 30,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    textAlign: 'left',
  },
});
