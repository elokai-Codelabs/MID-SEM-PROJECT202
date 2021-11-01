import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Product = ({ image, price, title }) => {
  return (
    <TouchableOpacity style={styles.productStyle}>
      <View
        style={{
          flexBasis: "30%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "50%" }}
          source={{ uri: image }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexBasis: "50%",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18, color: "#11284d" }}>
            {title}
          </Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, color: "red" }}>
            $ {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  productStyle: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "70%",
    margin: 10,
    flexDirection: "row",
    height: 150,
  },
});
