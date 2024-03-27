import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
    OpenSidebar(); // Close the sidebar after navigation
  };

  return (
    <View style={[styles.sidebar, openSidebarToggle && styles.sidebarResponsive]}>
      <View style={styles.sidebarTitle}>
        <TouchableOpacity onPress={() => handleNavigation('Home')}>
          <View style={styles.sidebarBrand}>
            <Feather name="shopping-bag" size={24} color="#000" style={styles.iconHeader} />
            <Text style={styles.brandText}>Food Recipe Finder</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={OpenSidebar} style={styles.closeIcon}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sidebarList}>
        <TouchableOpacity onPress={() => handleNavigation('Home')} style={styles.sidebarListItem}>
          <Feather name="home" size={24} color="#000" style={styles.icon} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('RecipeSearch')} style={styles.sidebarListItem}>
          <Feather name="search" size={24} color="#000" style={styles.icon} />
          <Text>Recipe Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('UserDashboard')} style={styles.sidebarListItem}>
          <Feather name="users" size={24} color="#000" style={styles.icon} />
          <Text>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Login')} style={styles.sidebarListItem}>
          <Feather name="lock" size={24} color="#000" style={styles.icon} />
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Registration')} style={styles.sidebarListItem}>
          <Feather name="user-plus" size={24} color="#000" style={styles.icon} />
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Settings')} style={styles.sidebarListItem}>
          <Feather name="settings" size={24} color="#000" style={styles.icon} />
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Contact')} style={styles.sidebarListItem}>
          <Feather name="mail" size={24} color="#000" style={styles.icon} />
          <Text>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#fff',
    width: 250,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    height: '100%',
  },
  sidebarResponsive: {
    width: 0, // Set width to 0 when it's not responsive
  },
  sidebarTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sidebarBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    marginRight: 5,
  },
  brandText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeIcon: {
    padding: 5,
  },
  sidebarList: {
    paddingTop: 10,
  },
  sidebarListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 10,
  },
});

export default Sidebar;
