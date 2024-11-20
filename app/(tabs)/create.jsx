// import React from 'react';
// import {
//   StyleSheet,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View
// } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';

// const lessons = [
//   {
//     name: 'Squat',
//     cal: 22,
//     duration: 10,
//   },
//   {
//     name: 'Pull-up',
//     cal: 12,
//     duration: 15,
//   },
//   {
//     name: 'Push-up',
//     cal: 12,
//     duration: 5,
//   },
//   {
//     name: 'Calisthenics',
//     cal: 33,
//     duration: 12,
//   }
// ];

// export default function Create() {
//   return (
//     <SafeAreaView className="flex-1 bg-gray-50">
//       <Header />
//       <ScrollView
//         className="p-4"
//         contentContainerStyle={{ paddingBottom: 20 }}
//         keyboardShouldPersistTaps="handled"
//         nestedScrollEnabled
//       >
//         {/* Header */}
//         <View className="flex-row items-center justify-between p-4">
//           <Text className="text-2xl font-semibold text-gray-800 ">Seznam nahranych</Text>
//           <TouchableOpacity
//             className="bg-blue-600 px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800"
//             onPress={() => alert('Nahrávat dokument')}
//           >
//             <View className="flex-row items-center justify-between">
//               <AntDesign name='pluscircleo' size={14} color="white" />
//               <Text className="text-white text-sm font-semibold tracking-wide px-2">
//                 Nahrát
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         {/* Lessons */}
//         {lessons.map(({ name, cal, duration }, index) => (
//           <TouchableOpacity
//             key={index}
//             className="bg-white rounded-lg shadow-sm p-4 mb-3 active:bg-gray-100"
//             onPress={() => {
//               // handle onPress
//             }}
//           >
//             <View className="flex-row items-center justify-between">
//               {/* Left content */}
//               <View>
//                 <Text className="text-lg font-semibold text-gray-800">{name}</Text>
//                 <Text className="text-gray-600 text-sm mt-1">
//                   {duration} mins • {cal} cals
//                 </Text>
//               </View>
//               {/* Right icon */}
//               <FeatherIcon name="chevron-right" size={24} color="#9ca3af" />
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }


import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const data = [
  { id: '1', repo: 'Bohemika-App', title: 'home page', time: '1d' },
  { id: '2', repo: 'recipe', title: 'docker compose is working but logout isn\'t', time: '9d' },
];

export default function Create() {
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
        className='flex-row justify-between items-center p-4 border-b border-gray-200'
    >
      <View>
        <Text className='text-sm font-semibold text-black'>
          {item.repo}
        </Text>
        <Text className='text-lg text-black'>{item.title}</Text>
      </View>
      <Text className='text-black text-xs'>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
       <Header />
       <ScrollView
        className="p-4"
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
      >
        <View className='flex-1'>
          <View className={('flex-row justify-around mb-2 px-4')}>
            <Text className={('text-black')}>Open</Text>
            <Text className={('text-black')}>Created by me</Text>
            <Text className={('text-black')}>Visibility</Text>
            <Text className={('text-black')}>Organization</Text>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}