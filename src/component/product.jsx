import { View, Text, Image, StyleSheet,Pressable} from "react-native";
import React from "react";
import { productsItems } from "./data";


const Product = () => {
  return (
    <View style={styles.container}>
 
      <Text style={styles.title}>Type of Product</Text>
      <View style={styles.productContainer}>
        <Text style={styles.label}>Name</Text>
        {productsItems.map((item, index) => (
          <View key={index} style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            {item.URL && (
              <Image
                source={{ uri: item.URL }}
                style={styles.productImage}
                // resizeMode="contain"
              />
            )}
            {/* <View style={StyleSheet.priceaddbutton}>

             <Text>
             ₹{item.price}
              </Text>
       <Pressable style={styles.button}>
      <Text style={styles.text}>Add</Text>
    </Pressable>

            </View> */}

<View style={styles.priceAddButton}>
  <Text style={styles.priceText}>₹{item.price}</Text>
  <Pressable style={styles.button}>
    <Text style={styles.buttonText}>Add</Text>
  </Pressable>
</View>

          </View>
        ))}
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  productItem: {
    marginBottom: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f3f3f3",
    
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
  },
  productImage: {
    width: 200,
    height: 200,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  priceAddButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Product;


