import React, { useEffect, useState } from 'react';
import { ScrollView, Text, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import * as SecureStore from 'expo-secure-store';
import CollapsibleCategory from '../../components/CollapsibleCategory';

export default function Home() {
  const [storedToken, setStoredToken] = useState(null);
  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState({});
  const [openCategory, setOpenCategory] = useState(null);

  // Načítání tokenů
  useEffect(() => {
    const loadTokens = async () => {
      const token = await SecureStore.getItemAsync('token');
      setStoredToken(token);
    };
    loadTokens();
  }, []);

  // Načítání dat
  useEffect(() => {
    const infoContract = async () => {
      if (!storedToken) return; // Kontrola, zda je token dostupný
      try {
        const response = await fetch('https://mba.bsfaplikace.cz/Contract', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };
    infoContract();
  }, [storedToken]);

  // Seskupení dat podle kategorie
  useEffect(() => {
    const groupByCategory = (data) => {
      return data.reduce((acc, item) => {
        const category = item.institution;
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
      }, {});
    };
    setGroupedData(groupByCategory(data));
  }, [data]);

  // Přepínání kategorie
  const toggleCategory = (category) => {
    setOpenCategory(category === openCategory ? null : category);
  };

  return (
    <SafeAreaView>
      <Header key={1} />
      <ScrollView
        className="p-4"
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
      >
        {Object.keys(groupedData).map((category) => (
          <CollapsibleCategory
            key={category}
            category={category}
            data={groupedData[category]}
            isOpen={openCategory === category}
            toggleCategory={() => toggleCategory(category)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
});
