import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useSelector } from "react-redux";
import { Link } from "expo-router";

const Footer = () => {
  const cartItems = useSelector((state) => state.cart.item) || []; // Provide a fallback to an empty array
  const itemCount = cartItems.length;
 

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="home" type="antdesign" size={30} color="black" />
        <Icon name="user" type="antdesign" size={30} color="black" />

        <View style={styles.cartIconContainer}>
          <Link href="cart">
            <Icon
              name="shopping-cart"
              type="material"
              size={30}
              color="black"
            />
            {itemCount > 0 && (
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{itemCount}</Text>
              </View>
            )}
          </Link>
        </View>

        <Icon name="bars" type="font-awesome" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    position: "fixed",
    bottom: 5,
    backgroundColor: "white",
    width: "100%",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  badgeContainer: {
    position: "absolute",
    right: -6,
    top: 10,

    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Footer;
