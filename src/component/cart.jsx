import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const itemCount = cartItems.length;

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <Text style={styles.countText}>Total Items: {itemCount}</Text>

      {itemCount > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.URL }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <View>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>₹{item.price}</Text>
                  <Text style={styles.itemQuantity}>
                    Quantity: {item.quantity}
                  </Text>
                </View>

                <View style={styles.plueButton}>
                  <Pressable
                    onPress={() => handleDecrement(item.id)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>-</Text>
                  </Pressable>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <Pressable
                    onPress={() => handleIncrement(item.id)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty!</Text>
      )}
      {itemCount > 0 && (
        <Text style={styles.totalPrice}>
          Total Price: ₹{totalPrice.toFixed(2)}
        </Text>
      )}
      <Text style={styles.buyNow}>
        Buy Now
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    buttom:40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  countText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plueButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding:4,
    borderRadius:10,

  },
  button: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#333",
  },
  emptyCart: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#999",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop:10,
    paddingBottom:30,
    textAlign:'center',
  },
  buyNow:{
  paddingBottom:30,
  textAlign:'center',
  fontSize:20,
  backgroundColor:'gray',
  width:100,
  justifyContent: 'center',
  margin:'auto',
  alignItems:'center',
   alignContent: 'center',
   padding:10, 


  },
});

export default Cart;
