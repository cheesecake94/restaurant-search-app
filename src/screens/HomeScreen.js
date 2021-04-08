import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import BusinessesList from '../components/BusinessesList';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses'

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [searchBusinesses, businesses, errorMessage] = useBusinesses();

  const filterBusinessesByPrice = (price) => {
    return businesses.filter(business => business.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchBusinesses(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <BusinessesList title="Cost Effective" businesses={filterBusinessesByPrice('$')} />
        <BusinessesList title="Bit Pricier" businesses={filterBusinessesByPrice('$$')} />
        <BusinessesList title="Big Spender" businesses={filterBusinessesByPrice('$$$')} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;