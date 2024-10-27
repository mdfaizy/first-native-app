import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/Authslice"; 
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  // const handleSubmit = async () => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       formData.email,
  //       formData.password
  //     );
  //     const user = userCredential.user;
  //     setIsLoggedIn(true);
  //     console.log(user.email);
  //   } catch (error) {
  //     // error message
  //     alert(error.message);
  //   }
  // };


  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      dispatch(addUser(user));

      console.log(user);
      router.push("/about");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };


  useEffect(() => {
    const result = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/login");
      }
    });
    return result;
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>
          <Link href="/">Back</Link>
        </Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>REGISTER</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Enter the name"
            placeholderTextColor="darkblue"
            style={styles.input}
            value={formData.name}
            onChangeText={(value) => handleInputChange("name", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter the email"
            placeholderTextColor="darkblue"
            style={styles.input}
            value={formData.email}
            onChangeText={(value) => handleInputChange("email", value)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter the password"
            placeholderTextColor="darkblue"
            style={styles.input}
            secureTextEntry
            value={formData.password}
            onChangeText={(value) => handleInputChange("password", value)}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerLinkContainer}>
          <Text style={styles.registerText}>
            Already have an account?{" "}
            <Link href="/login" style={styles.registerLink}>
              Login
            </Link>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    justifyContent: "center",
  },
  backButton: {
    backgroundColor: "black",
    padding: 8,
    width: 48,
    borderRadius: 8,
    marginBottom: 20,
    top: -80,
  },
  backButtonText: {
    color: "white",
    textAlign: "center",
  },
  formContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#D97706",
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "white",
    color: "#D97706",
  },
  loginButton: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  registerLinkContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  registerText: {
    color: "#D97706",
    fontSize: 16,
  },
  registerLink: {
    color: "#1E40AF",
  },
});

export default Signup;
