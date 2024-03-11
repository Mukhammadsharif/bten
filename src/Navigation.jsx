import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Main from './screens/Main';
import {COLORS} from './helpers/customColor';
import Logo from './bten-icons/bten-logo.png';
import ReserveTable from './screens/ReserveTable';
import ReserveDone from './screens/ReserveDone';
import Profile from './screens/Profile';
import OrderDone from './screens/OrderDone';
import Translations from './screens/Translations';
import Events from './screens/Events';
import Japan from './screens/Japan';
import Valentine from './screens/Valentine';
import Background from './bten-icons/drawer-background.png';
import DrawerEllipse from './bten-icons/drawer-ellipse.png';
import DrawerRomb from './bten-icons/romb.png';
import Menu from './screens/Menu';
import Games from './screens/Games';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
          backgroundColor: 'transparent',
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="ReserveTable" component={ReserveTable} />
      <Drawer.Screen name="ReserveDone" component={ReserveDone} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="OrderDone" component={OrderDone} />
      <Drawer.Screen name="Translations" component={Translations} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Japan" component={Japan} />
      <Drawer.Screen name="Games" component={Games} />
      <Drawer.Screen name="Valentine" component={Valentine} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <ImageBackground source={Background} style={styles.container}>
        <ImageBackground source={DrawerEllipse} style={styles.drawerEllipse}>
          <View
            style={{
              backgroundColor: COLORS.white,
              marginTop: 40,
              width: '50%',
              alignSelf: 'center',
              marginBottom: 40,
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
              <TouchableOpacity
                onPress={() => navigation.navigate('ReserveTable')}>
                <Image source={DrawerRomb} style={styles.romb} />
                <Text style={styles.itemText}>Резерв стола</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Translations')}>
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
      </ImageBackground>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: height,
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
