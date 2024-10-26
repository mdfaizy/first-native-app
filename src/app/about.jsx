import { getAuth, signOut } from "firebase/auth";
import { View, Text, Pressable, Alert, StyleSheet ,ScrollView, SafeAreaView} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Product from "../component/product";

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>Logo</Text>
        </View>
        <View>
          <Pressable onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </Pressable>
        </View>
      </View>
      <Product/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position:"fixed",
  
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
