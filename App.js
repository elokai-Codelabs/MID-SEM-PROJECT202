import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import Cart from "./app/screens/Cart";
import ProductDetails from "./app/screens/ProductDetails";
import allReducers from "./app/redux/store";

export default function App() {
  const Stack = createStackNavigator();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Productdetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
