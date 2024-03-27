import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const RecipeDetails = () => {
  const route = useRoute();
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(recipeId);
        console.log("RECIPE DETAILS", response.data);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError('Error fetching recipe details. Please try again later.');
        setLoading(false);
      }
    };
    fetchRecipeDetails();
  }, [recipeId]);

  if (loading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>{error}</Text>;
  if (!recipe) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.header}>{recipe.recipe.label}</Text>
        <Image style={styles.image} source={{ uri: recipe.recipe.image }} />
        
        <Text style={styles.sectionHeader}>Ingredients:</Text>
        <View>
          {recipe.recipe.ingredients && recipe.recipe.ingredients.map((ingredient, index) => (
            <Text key={index}>{ingredient.text}</Text>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Health Labels:</Text>
        <View>
          {recipe.recipe.healthLabels && recipe.recipe.healthLabels.map((label, index) => (
            <Text key={index}>{label}</Text>
          ))}
        </View>

        <Text style={styles.sectionHeader}>Source:</Text>
        <Text style={styles.source}>{recipe.source}</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(recipe.url)}>---View Recipe---</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  source: {
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RecipeDetails;
