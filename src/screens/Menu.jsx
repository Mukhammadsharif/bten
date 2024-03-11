import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../bten-icons/main-screen-background.png';
import {COLORS} from '../helpers/customColor';
import Logo from '../bten-icons/bten-logo.png';
import DrawerRomb from '../bten-icons/romb.png';
import {useNavigation} from '@react-navigation/native';

const {height} = Dimensions.get('window');

export default function Menu() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <View
        style={{
          backgroundColor: COLORS.white,
          width: '100%',
          alignSelf: 'center',
          marginBottom: 40,
          paddingVertical: 50,
        }}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.drawerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Image source={DrawerRomb} style={styles.romb} />
            <Text style={styles.itemText}>Главная</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.drawerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Image source={DrawerRomb} style={styles.romb} />
            <Text style={styles.itemText}>Меню</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.drawerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('ReserveTable')}>
            <Image source={DrawerRomb} style={styles.romb} />
            <Text style={styles.itemText}>Резерв стола</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.drawerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Translations')}>
            <Image source={DrawerRomb} style={styles.romb} />
            <Text style={styles.itemText}>Трансляции</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.drawerItem}>
          <TouchableOpacity onPress={() => navigation.navigate('Events')}>
            <Image source={DrawerRomb} style={styles.romb} />
            <Text style={styles.itemText}>События</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height + 10,
    width: '100%',
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerItem: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  itemText: {
    color: COLORS.black,
    fontSize: 26,
    fontFamily: 'AlumniSans-Bold',
    position: 'absolute',
    alignSelf: 'center',
    top: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'AlumniSans-Medium',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 20,
    height: 20,
  },
  logo: {
    aspectRatio: 3,
    height: 60,
    alignSelf: 'center',
  },
  drawerEllipse: {
    height: height * 0.8,
    marginTop: height * 0.2,
    position: 'absolute',
    right: 0,
    left: 0,
  },
  romb: {
    aspectRatio: 5,
    height: 60,
    alignSelf: 'center',
    marginTop: -15,
  },
});
