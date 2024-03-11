import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import Background from '../bten-icons/bron.png';
import HamburgerButton from '../bten-icons/burger.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../components/CustomButton';
import BusketButton from '../bten-icons/header-vehicle.png';

const {height} = Dimensions.get('window');
export default function ReserveTable() {
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

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={BusketButton} style={styles.button} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Резерв Вашего столика</Text>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder={'Ваше имя....'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Номер телефона'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'E-mail'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Дата'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Время'}
          placeholderTextColor={'#565555'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Номер столика'}
          placeholderTextColor={'#565555'}
        />
      </View>

      <CustomButton
        text={'Подтвердить '}
        onPress={() => navigation.navigate('ReserveDone')}
      />
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
    color: COLORS.white,
    fontSize: 30,
    fontFamily: 'AlumniSans-Bold',
    paddingLeft: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  main: {
    width: '80%',
    borderRadius: 8,
    paddingBottom: 40,
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? '50%' : '45%',
  },
  input: {
    borderColor: '#828080',
    borderBottomWidth: 0.5,
    width: '90%',
    paddingLeft: 15,
    fontFamily: 'AlumniSans-Bold',
    color: '#828080',
    marginTop: 10,
    height: 50,
    fontSize: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
});
