import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const [name, setName] = useState("Larbi");

  useEffect(() => {
    // alert(name);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <MaterialIcons
            onPress={() => setName("Ernest")}
            name="dashboard"
            size={28}
            color="grey"
          />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Larbi's Shop</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "orange" }}></ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
