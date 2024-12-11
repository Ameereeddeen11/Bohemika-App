import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Card from "./Card";

export default function CollapsibleCategory(props) {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={props.toggleCategory}>
                <Text
                    style={{ fontSize: 18 }}
                    className="text-5xl font-semibold  px-1"
                >
                    {props.isOpen ? "▼" : "▶"}  {props.category}
                </Text>
            </TouchableOpacity>
            {props.isOpen && (
                <View>
                    {Array.isArray(props.data) && props.data.map((item, index) => (
                        <Card
                            key={index}
                            institution={item.institution}
                            nazev={item.product}
                            platnostOd={item.dateValidityFrom ? item.dateValidityFrom.split('T')[0] : 'Neznámé'}
                            platnostDo={item.dateValidityTo ? item.dateValidityTo.split('T')[0] : 'Neznámé'}
                        />
                    ))}
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 5,
    },
});