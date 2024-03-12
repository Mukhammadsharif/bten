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
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../bten-icons/translations-background-image.png';
import HamburgerButton from '../bten-icons/burger.png';
import {COLORS} from '../helpers/customColor';
import translation from '../helpers/translation';

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {translation?.map(item => (
          <View style={styles.card}>
            <View>
              <Text style={styles.date}>{item?.date}.03</Text>
              <Text style={styles.hour}>{item?.time}</Text>
            </View>

            <View style={styles.match}>
              <Text style={styles.matchText}>
                {item.team1}
                {'\n'} - {'\n'}
                {item.team2}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    fontSize: 20,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    textAlign: 'right',
  },
  date: {
    fontSize: 28,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    textAlign: 'left',
  },
  hour: {
    fontSize: 20,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.white,
    textAlign: 'left',
  },
});
