import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import BusketButton from '../bten-icons/header-vehicle.png';
import HamburgerButton from '../bten-icons/burger.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import Background from '../bten-icons/hot-background.png';
import MenuIcon from '../bten-icons/menu.png';
import Hot from '../bten-icons/hot.png';
import HotActive from '../bten-icons/hot-active.png';
import Salad from '../bten-icons/salat.png';
import SaladActive from '../bten-icons/salat-active.png';
import Desert from '../bten-icons/desert.png';
import DesertActive from '../bten-icons/desert-active.png';
import {products} from '../products/products';
import Card from '../components/Card';

const {height} = Dimensions.get('window');
export default function Main() {
  const navigation = useNavigation();
  const [category, setCategory] = useState(0);

  return (
    <ImageBackground
      source={Background}
      style={styles.container}
      imageStyle={styles.background}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={HamburgerButton} style={styles.hamButton} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={BusketButton} style={styles.button} />
        </TouchableOpacity>
      </View>

      <Image source={MenuIcon} style={styles.menu} />

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => setCategory(0)}
          style={category === 0 ? styles.active : styles.passive}>
          <Image
            source={category === 0 ? HotActive : Hot}
            style={styles.category}
          />
          <Text style={category === 0 ? styles.activeText : styles.passiveText}>
            горячее
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategory(1)}
          style={category === 1 ? styles.active : styles.passive}>
          <Image
            source={category === 1 ? SaladActive : Salad}
            style={styles.category}
          />
          <Text style={category === 1 ? styles.activeText : styles.passiveText}>
            салаты
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategory(2)}
          style={category === 2 ? styles.active : styles.passive}>
          <Image
            source={category === 2 ? DesertActive : Desert}
            style={styles.category}
          />
          <Text style={category === 2 ? styles.activeText : styles.passiveText}>
            десерты
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'ios' ? 0 : 100,
        }}>
        <View style={styles.pageContainer}>
          {products[category].map((item, index) => {
            return <Card item={item} key={item.name} />;
          })}
        </View>
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
    width: 35,
    height: 35,
  },
  hamButton: {
    aspectRatio: 1.5,
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  menu: {
    resizeMode: 'contain',
    width: '100%',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 60,
    marginTop: 10,
  },
  category: {
    aspectRatio: 1.5,
    resizeMode: 'contain',
    width: Platform.OS === 'ios' ? 80 : 60,
    height: Platform.OS === 'ios' ? 80 : 60,
  },
  active: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  passive: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  activeText: {
    justifyContent: 'center',
    color: COLORS.categoryActive,
    fontSize: 20,
    fontFamily: 'AlumniSans-Medium',
  },
  passiveText: {
    justifyContent: 'center',
    color: COLORS.white,
    fontSize: 20,
    fontFamily: 'AlumniSans-Regular',
  },
  pageContainer: {
    width: Dimensions.get('window').width,
  },
});
