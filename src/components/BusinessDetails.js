import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const BusinessDetails = ({ business }) => {
  const defaultImageUrl = 'https://m.media-amazon.com/images/I/71vkoasHvvL.jpg';

  return (
    <View style={styles.container}>
      <Image source={{ uri: business.image_url ? business.image_url : defaultImageUrl }} style={styles.image} />
      <Text style={styles.name}>{business.name}</Text>
      <Text style={styles.rating}>{business.rating} Stars, {business.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 255,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  },
  rating: {
    color: 'gray'
  }
});

export default BusinessDetails;