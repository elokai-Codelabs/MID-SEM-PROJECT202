import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
// axios help fetch api request
import axios from "axios";
import Product from "../components/Product";

const Home = () => {
  //create use state for ur products
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ddd",
      }}
    >
      <View
        style={{
          marginHorizontal: 20,
          width: "60%",
          flexBasis: "15%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <MaterialIcons name="dashboard" size={28} color="grey" />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Larbi's Shop</Text>
        </View>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products &&
          products.map((prod) => (
            <Product
              key={prod.id}
              image={prod.image}
              price={prod.price}
              title={prod.title}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
