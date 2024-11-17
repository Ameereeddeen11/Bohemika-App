import React from 'react';
import { View, Text } from 'react-native';

const Table = ({ data }) => (
    <View className="w-full rounded-lg">
      {data.map((row, rowIndex) => (
            <View
              key={rowIndex}
              className='flex flex-row'
            >
                {
                    row.map((cell, cellIndex) => (
                        <Text
                            key={cellIndex}
                            className={`flex-auto text-sm p-3 border-b border-gray-300 ${
                                cellIndex === row.length - 1 ? 'text-right font-bold' : 'text-left'
                            } text-gray-700`}
                        >
                        {cell ?? 'Není k dispozici'}
                        </Text>
                    ))
                }
            </View>
      ))}
    </View>
);

export default Table;
