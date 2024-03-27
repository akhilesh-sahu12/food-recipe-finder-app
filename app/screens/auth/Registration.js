import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ToastContainer, toast } from 'react-native-toastify';
import 'react-native-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext'; // Assuming this context exists
import { ScrollView } from 'react-native-gesture-handler';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSuccessful, setIsSuccessful] = useState(false);
  const { registerUser } = useAuth(); 
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.password === formData.confirmPassword) {
      registerUser(formData);
      setIsSuccessful(true);
      console.log('Form submitted:', formData); // For debugging purpose
    } else {
      toast.warning('Password and confirm password do not match!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  useEffect(() => {
    let timeoutId;
    if (isSuccessful) {
      toast.success('Registration successful! Please login.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onClose: () => {
          // Navigate to the login screen after 3 seconds
          timeoutId = setTimeout(() => {
            navigation.navigate('Login');
          }, 3000);
        },
      });
    }

    // Clear the timeout if the component unmounts before the timeout completes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isSuccessful, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ToastContainer />
      <Text style={styles.heading}>Registration Form</Text>
      <View style={styles.form}>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          value={formData.username}
          onChangeText={text => handleChange('username', text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your username"
        />
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={text => handleChange('email', text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your email"
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          value={formData.password}
          onChangeText={text => handleChange('password', text)}
          secureTextEntry
          placeholder="Enter your password"
        />
        <Text>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          value={formData.confirmPassword}
          onChangeText={text => handleChange('confirmPassword', text)}
          secureTextEntry
          placeholder="Confirm your password"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.link} onPress={() => navigation.navigate('Login')}>Login</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Registration;
