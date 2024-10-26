import { signInWithEmailAndPassword } from "firebase/auth";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { auth } from "../../firebaseConfig";

import { useRouter } from "expo-router";
const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = async () => {
    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      setIsLoggedIn(true);

      console.log(user);

      // Redirect to homepage
      router.push("/about");
    } catch (error) {
      // Alert error message
      alert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/about");
      }
    });
    return () => unsubscribe();
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
          <Text style={styles.title}>LOGIN</Text>
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
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerLinkContainer}>
          <Text style={styles.registerText}>
            Don't have an account?{" "}
            <Link href="/signup" style={styles.registerLink}>
              Register
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
    top: -130,
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
    color: "#D97706", // Yellow color
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "white",
    color: "#D97706", // Yellow text color
  },
  loginButton: {
    backgroundColor: "#1E3A8A", // Dark blue color
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
    color: "#D97706", // Yellow text color
    fontSize: 16,
  },
  registerLink: {
    color: "#1E40AF", // Blue color for link
  },
});

export default Login;