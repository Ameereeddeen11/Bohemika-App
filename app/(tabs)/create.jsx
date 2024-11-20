import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';

const lessons = [
  {
    name: 'Squat',
    cal: 22,
    duration: 10,
  },
  {
    name: 'Pull-up',
    cal: 12,
    duration: 15,
  },
  {
    name: 'Push-up',
    cal: 12,
    duration: 5,
  },
  {
    name: 'Calisthenics',
    cal: 33,
    duration: 12,
  },
  {
    name: 'Lunge',
    cal: 44,
    duration: 10,
  },
  {
    name: 'Squat',
    cal: 22,
    duration: 10,
  },
  {
    name: 'Pull-up',
    cal: 12,
    duration: 15,
  },
  {
    name: 'Push-up',
    cal: 12,
    duration: 5,
  },
  {
    name: 'Calisthenics',
    cal: 33,
    duration: 12,
  },
  {
    name: 'Lunge',
    cal: 44,
    duration: 10,
  },
];

export default function Example() {
  return (
    <SafeAreaView style={{flex: 1}}>
        <Header/>
        <ScrollView
            className="p-4"
            contentContainerStyle={{ paddingBottom: 20 }}
            keyboardShouldPersistTaps="handled"
            nestedScrollEnabled
        >
            <View className="flex-row items-center justify-between p-2 bg-gray-100 rounded-lg shadow-sm">
                <Text className="text-2xl font-semibold text-gray-800">Seznam vytvořených</Text>
                <TouchableOpacity 
                    className="bg-blue-600 p-3 rounded-xl h-10 w-28 items-center justify-center shadow-md hover:bg-blue-700 active:bg-blue-800" 
                    onPress={() => alert('Nahrávat dokument')}
                >
                    <Text className="text-white text-sm font-semibold tracking-wide">Nahrát</Text>
                </TouchableOpacity>
            </View>
            {lessons.map(({ name, cal, duration, img }, index) => {
                return (
                    <TouchableOpacity
                    key={index}
                    onPress={() => {
                        // handle onPress
                    }}>
                        <View style={styles.card}>
                            <View>
                                <Text style={styles.cardTitle}>{name}</Text>

                                <View style={styles.cardStats}>
                                    <View style={styles.cardStatsItem}>
                                        <FeatherIcon color="#636a73" name="clock" />

                                        <Text style={styles.cardStatsItemText}>
                                            {duration} mins
                                        </Text>
                                    </View>

                                    <View style={styles.cardStatsItem}>
                                        <FeatherIcon color="#636a73" name="zap" />
                                        <Text style={styles.cardStatsItemText}>{cal} cals</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.cardAction}>
                                <FeatherIcon
                                    color="#9ca3af"
                                    name="chevron-right"
                                    size={22} 
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  cardStats: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardStatsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  cardStatsItemText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#636a73',
    marginLeft: 2,
  },
  cardAction: {
    marginLeft: 'auto',
  },
});