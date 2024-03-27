import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Using Feather icons from Expo

function Header({ OpenSidebar }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={OpenSidebar} style={styles.menuIcon} testID="menu-icon">
        <Feather name="menu" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.headerCenter}>
        <Text style={styles.headerText}>Food Recipe Finder</Text>
      </View>
      <View style={styles.headerRight}>
        <Feather name="sun" size={24} color="#000" />
        <Feather name="mail" size={24} color="#000" />
        <Feather name="bell" size={24} color="#000" />
        <Feather name="menu" size={24} color="#000" />
        <Feather name="user" size={24} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
