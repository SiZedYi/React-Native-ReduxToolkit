import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) {
    return <View><Text>Please select a product.</Text></View>;
  }

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#E941411A'}}>
      <Image source={selectedProduct.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{selectedProduct.name}</Text>
      <Text style={styles.price}>
        <Text style={styles.oldPrice}>15% OFF {selectedProduct.price}$</Text>
        <Text style={styles.newPrice}> {selectedProduct.price - selectedProduct.price * 0.15}$</Text>
      </Text>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.description}>
        {selectedProduct.description}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="♥" color="#FF6347" />
        <Button title="Add to cart" color="#FF6347" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  oldPrice: {
    color: 'gray',
    marginRight: 50,
    fontSize: 20
  },
  newPrice: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 20,
    fontSize: 20

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default ProductDetail;