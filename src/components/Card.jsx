import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../helpers/customColor';
import Ellipse from '../bten-icons/price-ellipse.png';
export default function Card({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const trash = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(cart => cart.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        trash(product);
      } else {
        add(product);
      }
    } else {
      add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(cart => cart.name === item.name);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      } else {
        setAdded(false);
      }
    };

    getProduct();
  }, [refresh]);
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image source={item.image} style={styles.image} />
      </View>

      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Image source={Ellipse} style={styles.ellipse} />
          <Text style={styles.price}>{item.price} ₽ </Text>

          {added ? (
            <TouchableOpacity
              onPress={() => trash(item)}
              style={styles.addedButton}>
              <Text style={styles.addedButtonText}>Добавлено</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => define(item)}
              style={styles.button}>
              <Text style={styles.buttonText}>В корзину</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: COLORS.white,
    paddingVertical: 0,
  },
  image: {
    height: 100,
    alignSelf: 'center',
    aspectRatio: 1.6,
    resizeMode: 'contain',
  },
  leftContainer: {
    width: '30%',
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 6,
    width: '70%',
  },
  name: {
    color: COLORS.black,
    fontFamily: 'AlumniSans-Bold',
    fontSize: 25,
    textAlign: 'right',
  },
  description: {
    color: COLORS.black,
    fontFamily: 'AlumniSans-Light',
    fontSize: 14,
    textAlign: 'right',
  },
  divider: {
    width: '110%',
    height: 2,
    backgroundColor: COLORS.main,
    marginLeft: -10,
  },
  price: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 22,
    color: COLORS.white,
    position: 'absolute',
    left: 25,
    top: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderWidth: 1.5,
    borderColor: COLORS.black,
  },
  buttonText: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '700',
  },
  priceContainer: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: COLORS.main,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderWidth: 1.5,
    borderColor: COLORS.black,
    backgroundColor: '#2E9C45',
  },
  addedButtonText: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '700',
  },
  icon: {
    width: 25,
    height: 22,
  },
  ellipse: {
    aspectRatio: 1.6,
    resizeMode: 'contain',
    width: 130,
    marginBottom: -47,
    marginLeft: -20,
  },
});
