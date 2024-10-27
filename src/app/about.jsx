import { getAuth, signOut } from "firebase/auth";
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Product from "../component/product";
import Footer from "../component/fotter";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch } from "react-redux";
import Cart from '../component/cart';
const About = () => {
  const auth = getAuth();
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert("Success", "You have been logged out.");
        router.push("/login");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };
  
  
  // const dispatch = useDispatch();
  // const router = useRouter();

  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       Alert.alert("Success", "You have been logged out.");
  //       dispatch(removeUser());
  //       router.push("/login");
  //     })
  //     .catch((error) => {
  //       Alert.alert("Error", error.message);
  //     });
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator="false">
        <View style={styles.header}>
          <View style={styles.searchtab}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              placeholder="Enter the email"
              style={styles.input}
              // value={formData.email}
              // onChangeText={(value) => handleInputChange("email", value)}
            />
          </View>
          <View>
            <Pressable onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Log Out</Text>
            </Pressable>
          </View>
        </View>
        <Product />
        <Cart/>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    padding: 16,
    // position:'fixed',
    
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //    position:'fixed',
  },
  searchtab: {
    flexDirection: "row",
    width: 230,
    padding: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#2F855A",
    paddingVertical: 12,
    borderRadius: 8,
    width: 96,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default About;
