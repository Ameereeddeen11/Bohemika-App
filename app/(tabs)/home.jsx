import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/Card';
import Header from '../../components/Header';

export default function home() {
    const Cards = {}
    return (
        <SafeAreaView>
            <Header/>
            <ScrollView className="p-4" contentContainerStyle={{paddingBottom: 20}}>
                <Card/><Text>{"\n"}</Text>
                <Card/><Text>{"\n"}</Text>
                <Card/><Text>{"\n"}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = styled({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardText: {
        fontSize: 14,
        color: '#333',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    cardFooterText: {
        fontSize: 12,
        color: '#666',
    },
    cardFooterButton: {
        backgroundColor: '#f0f0f0',
        padding: 5,
        borderRadius: 5,
    },
    cardFooterButtonText: {
        color: '#333',
        fontSize: 12,
    }
});