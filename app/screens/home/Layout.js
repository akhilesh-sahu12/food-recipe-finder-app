import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Import StatusBar from Expo
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" /> {/* Use StatusBar component to handle the status bar */}
        <Header />
        <Sidebar />
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Change to row to display Header and Sidebar horizontally
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default Layout;
