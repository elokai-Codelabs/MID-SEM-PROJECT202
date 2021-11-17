import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDispatch, useSelector } from "react-redux";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { resetCart, updateTotal } from "../redux/actions/actions";
import CartItems from "../components/CartItems";

import {
  primaryColor,
  primaryColorLight,
  primaryColorDark,
} from "../helpers/Variables";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const amount = useSelector((state) => state.amount);

  // setTax(0.05 * subtotal);
  // setTotal(subtotal + tax);

  // useEffect(() => {
  //   cart.map((car) =>
  //     setSubtotal((total) => total + car.quantity * car.retailPrice)
  //   );
  // }, [subtotal]);

  // dispatch(updateTotal({ subtotal, tax, total }));

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f0f0f0" }}
    ></SafeAreaView>
  );
};

export default Cart;
