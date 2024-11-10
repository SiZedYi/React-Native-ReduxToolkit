import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../redux/reducers';

export default function ListProduct({navigation}) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://67020a8db52042b542d90f16.mockapi.io/lab06/product');
        const data = await response.json();
        setProducts(data); // Set fetched products to state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (product) => {
    dispatch(selectProduct(product));
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={styles.container}>
      <View style={{height:'20%', justifyContent:'center'}}>
        <Text style={[{color:'#E94141'}, styles.title]}>The world’s Best Bike</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{flex:1, marginTop: 30, marginHorizontal:10, justifyContent:'center',     alignItems:'center',borderWidth: 1, borderColor:'#E9414187', borderRadius:6 }}>
          <Text style={{color:'#E94141'}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, marginTop: 30, marginHorizontal:10, justifyContent:'center', alignItems: 'center',borderWidth: 1, borderColor:'#E9414187', borderRadius:6 }}>
          <Text style={{color:'#BEB6B6'}}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, marginTop: 30, marginHorizontal:10, justifyContent:'center', alignItems: 'center',borderWidth: 1, borderColor:'#E9414187', borderRadius:6 }}>
          <Text style={{color:'#BEB6B6'}}>Mountain</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={[{height:'80%'}, styles.list_product]}>
      {products.map((pd) => {
        return (
        <View style={styles.item}>
          <Image style={styles.item.image} source={pd.image}/>
          <TouchableOpacity onPress={() => handleClick(pd)}>
             <Text>{pd.name}</Text>
          </TouchableOpacity>
          <Text style={{marginBottom: 12}}>
            <Text style={{color: '#F7BA83'}}>$</Text>
            <Text>{pd.price}</Text>
          </Text>
        </View>
          
        )
      })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  list_product: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    justifyContent: 'space-between'
  },
  item:{
    width: '45%',
    borderRadius: 10,
    backgroundColor: '#F7BA8326',
    alignItems: 'center',
    shadowColor: "#000",
    paddingTop: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    image: {
      width: 80,
      height: 80,
      resizeMode: 'contain'
    }
  }
});
