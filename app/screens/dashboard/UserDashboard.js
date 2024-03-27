import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../../context/UserContext';
import { useAuth } from '../../context/AuthContext';

const UserDashboard = () => {
  const { user } = useContext(UserContext);
  const { currentUser } = useAuth();

  if (!user) {
    return <Text style={styles.text}>No user details available.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome back, {currentUser.username || 'User'}!</Text>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Search History</Text>
        {user.history && user.history.length > 0 ? (
          user.history.map((search, index) => (
            <Text key={index} style={styles.item}>{search}</Text>
          ))
        ) : (
          <Text>No search history available.</Text>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Favorite Recipes</Text>
        {user.favorites && user.favorites.length > 0 ? (
          user.favorites.map((favorite, index) => (
            <Text key={index} style={styles.item}>{favorite}</Text>
          ))
        ) : (
          <Text>No favorite recipes available.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 5,
  },
});

export default UserDashboard;
