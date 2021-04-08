import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import BusinessDetails from './BusinessDetails';
import { withNavigation } from 'react-navigation';

const BusinessesList = ({ title, businesses, navigation }) => {
  return (
    <View style={styles.container}>
      {businesses.length > 0 ? <Text style={styles.title}>{title}</Text> : null}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={business => business.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Business', { id: item.id })}>
              <BusinessDetails business={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default withNavigation(BusinessesList);