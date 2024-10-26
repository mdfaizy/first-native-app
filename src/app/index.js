import {SafeAreaView} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebaseConfig";
import Signup from "./signup";
import Login from "./login";
import About from "./about";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from "react-native-web";
const Stack = createNativeStackNavigator();

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Stack.Navigator>
        {isLoggedIn ? (
         <View>
           <Stack.Screen name="About" component={About} />
           {/* <Stack.Screen name="Product" component={Product} /> */}
         </View>
        ) : showLogin ? (
          <Stack.Screen name="Login">
            {() => <Login setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Signup">
            {() => <Signup setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
     
    </SafeAreaView>
  );
};

export default Home;






