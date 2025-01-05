import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const contacts = [
        { id: 1, name: "Onkar" },
        { id: 2, name: "Abhijit" },
        { id: 3, name: "Akanksha" },
        { id: 4, name: "Ramchandra" },
        { id: 5, name: "Chhaya" },
        { id: 6, name: "Rahul" }
    ];

    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text></View>
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contach List</Text>
            <TextInput style={styles.searchBar} placeholder='Serch Contact...'
                placeholderTextColor='#888'
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={filterContacts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'bold',
        padding: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1e88e5',
        marginBottom: 20,
        textAlign: 'center'
    },
    searchBar: {
        height: 40,
        color: '#90caf9',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    listContainer: { paddingBottom: 20 },
    contactItem: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactName: {
        fontSize: 18,
        color: "#42420"
    }
})