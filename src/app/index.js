
import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { auth } from "../../firebaseConfig";
import Signup from "./signup";
import Login from "./login";
import About from "./about";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native-web";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/slice/Authslice";
import Cart from "../component/cart";
const Stack = createNativeStackNavigator();

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="about" component={About} />
           <Stack.Screen name="cart" component={Cart}/>
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Home;
