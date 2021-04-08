import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelpService from '../services/yelp.service';

const BusinessScreen = ({ navigation }) => {
  const [business, setBusiness] = useState(null);
  const businessId = navigation.getParam('id');

  const getBusiness = async (id) => {
    try {
      const response = await yelpService.get(`/${id}`);
      setBusiness(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBusiness(businessId);
  }, []);

  if (!business) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 12
  },
  image: {
    height: 200,
    width: 300,
    marginBottom: 8,
    borderRadius: 4
  }
});

export default BusinessScreen;