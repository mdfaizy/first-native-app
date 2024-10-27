import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import React from "react";
import { productsItems } from "./data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import {offerData} from "../component/data"
const Product = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log(item);
  };
  return (
    <View style={styles.container}>
   
      <View style={styles.offerfoot}>
   
      {offerData.map((itemImg, index) => {
        return (
          itemImg.image && (
            <View key={index}>
              <Image
                source={{ uri: itemImg.image }}
                style={styles.productImage}
              />
              <View>
                <Text style={styles.productnameOffer}>
                  {itemImg.name}
                </Text>
                <Text style={styles.productnameOfferUTo}>
                  {itemImg.offer}
                </Text>
              </View>
            </View>
          )
        );
      })}

      </View>
      <View style={styles.productContainer}>
        {productsItems.map((item, index) => (
          <View key={index} style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            {item.URL && (
              <Image
                source={{ uri: item.URL }}
                style={styles.productImage}
                
              />
            )}
            <View style={styles.priceAddButton}>
              <Text style={styles.priceText}>₹{item.price}</Text>
              <Pressable style={styles.button}    onPress={() => handleAddToCart(item)}>
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
    padding: 4,
  },
  offerfoot:{
     flex: 1,
     flexDirection:'row',
     padding:4,
     gap:4,
position:'relative',
flexWrap: 'wrap',

  },
  productnameOffer:{
    position:'absolute',
    top:-70,
    fontSize:16,
    color:'white',
    fontStyle:'italic',




  },
  productnameOfferUTo:{
    position:'absolute',
    top:-30,
    fontSize:'bold',
    fontSize:16,
    color:'white',
  },
 
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
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
    width: 140,
    height: 140,
    padding: 8,
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
