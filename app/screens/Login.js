import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmitLogin = () => {
    if (username && password) {
      navigation.navigate("Home");
    } else {
      alert("Fill in credentials");
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ee1",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 40 }}
        source={{
          uri: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        }}
      />
      <Text style={{ fontSize: 25, marginBottom: 20 }}>
        Welcome to Larbi's Shop
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSubmitLogin} style={styles.button}>
        <Text style={{ fontSize: 20, color: "#fff" }}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    width: "60%",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#4045Fe",
    width: "60%",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
