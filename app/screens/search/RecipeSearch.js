import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext'; // Assuming this context exists
import { FaHeart } from 'react-icons/fa';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [ingrRange, setIngrRange] = useState('');
  const [dietLabels, setDietLabels] = useState([]);
  const [healthLabels, setHealthLabels] = useState([]);
  const [cuisineType, setCuisineType] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const params = {
        q: query,
        app_id: API_ID,
        app_key: API_KEY,
      };
      if (ingrRange) params.ingr = ingrRange;
      if (dietLabels.length > 0) params.diet = dietLabels.join(',');
      if (healthLabels.length > 0) params.health = healthLabels.join(',');
      if (cuisineType) params.cuisineType = cuisineType;

      const response = await axios.get('https://api.edamam.com/api/recipes/v2?type=public', { params });
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    handleSearch();
    setRefreshing(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={text => setQuery(text)}
          placeholder="Search for recipes..."
        />
        <TextInput
          style={styles.input}
          value={ingrRange}
          onChangeText={text => setIngrRange(text)}
          placeholder="Number of Ingredients (MIN-MAX)"
        />
        {/* Implement other input fields */}
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recipeList}>
        {recipes.map(recipe => (
          <View key={recipe.recipe.uri} style={styles.recipeItem}>
            <Text>{recipe.recipe.label}</Text>
            {/* Implement other recipe details */}
            <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe: recipe })}>
              <Text>Details</Text>
            </TouchableOpacity>
            {user.favorites.includes(recipe.recipe.label) ? (
              <TouchableOpacity onPress={() => toggleFavorite(recipe.recipe.label)}>
                <FaHeart color="red" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => toggleFavorite(recipe.recipe.label)}>
                <FaHeart />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
      <View style={styles.refreshButton}>
        <TouchableOpacity style={styles.button} onPress={handleRefresh} disabled={refreshing}>
          <Text>{refreshing ? 'Refreshing...' : 'Refresh'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  searchForm: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  recipeList: {
    marginBottom: 20,
  },
  recipeItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  refreshButton: {
    alignItems: 'center',
  },
});

export default RecipeSearch;
