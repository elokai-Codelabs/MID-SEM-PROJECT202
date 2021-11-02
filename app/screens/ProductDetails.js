import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ProductDetails = () => {
  return (
    <SafeAreaView>
      <Image
        style={{ width: 100, height: 100, borderRadius: 20, marginBottom: 40 }}
        source={{
          uri: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        }}
      />
      <Text>Your satisfaction our Priority</Text>
      <Text>We sell items that will last you forever</Text>
      <Text>Patronise our services and you will not regret</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
