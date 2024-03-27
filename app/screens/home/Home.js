import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Home</Text>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardHeaderText}>Recipes for breakfast</Text>
            <Feather name="sunrise" size={24} color="#000" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardNumber}>784</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardHeaderText}>Recipes for lunch</Text>
            <Feather name="sun" size={24} color="#000" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardNumber}>908</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardHeaderText}>Recipes for dinner</Text>
            <Feather name="sunset" size={24} color="#000" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardNumber}>564</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardHeaderText}>Total</Text>
          </View>
          <Text style={styles.cardNumber}>2256</Text>
        </View>
      </View>

      <View style={styles.generalInfo}>
        <Text>
          The application will serve as a platform where users can explore a variety of food recipes. It will integrate the Edamam API to fetch recipe data based on user queries. The goal is to create a user-friendly application that provides clear and concise information about food recipes, including ingredients, nutritional information, and cooking instructions.
        </Text>
        <Text>
          Utilize the navigation to explore different sections of the dashboard.
        </Text>
      </View>

      <View style={styles.features}>
        <Text style={styles.featuresTitle}>Features List</Text>
        <Text>&#8226; User Authentication: Implement user login and registration functionality.</Text>
        <Text>&#8226; Recipe Search: Allow users to search for recipes based on ingredients, cuisine type, dietary restrictions, etc., using the Edamam API.</Text>
        <Text>&#8226; Recipe Details: Display detailed information about recipes, including ingredients, nutritional facts, and preparation steps.</Text>
        <Text>&#8226; Responsive Design: Ensure the application is fully responsive and functional on both web and mobile platforms.</Text>
        <Text>&#8226; User Dashboard: After logging in, users should have a dashboard displaying their search history and favorite recipes.</Text>
        <Text>&#8226; Data Refresh: Implement functionality to refresh data periodically or on user request.</Text>
      </View>

      <View style={styles.mobileFeatures}>
        <Text style={styles.mobileFeaturesTitle}>Mobile-Specific Features</Text>
        <Text>The mobile app provides enhanced user experience with mobile-specific features and gestures.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  cardIcon: {
    marginRight: 5,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  generalInfo: {
    marginBottom: 10,
  },
  features: {
    marginBottom: 10,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mobileFeatures: {
    marginBottom: 10,
  },
  mobileFeaturesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Home;
