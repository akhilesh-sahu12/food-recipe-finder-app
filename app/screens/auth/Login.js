import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ToastContainer, toast } from 'react-native-toastify';
import 'react-native-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext'; // Assuming this context exists
import { ScrollView } from 'react-native-gesture-handler';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { userLogin, registeredUsers, userLoginDetails } = useAuth();
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const user = registeredUsers.find(user => user.email === formData.email && user.password === formData.password);

    if (user) {
      userLogin();
      userLoginDetails(user);
      console.log('Logging in with:', user); // For debugging purpose

      // Show login success notification
      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        onOpen: () => {
          setTimeout(() => {
            navigation.navigate('Dashboard');
          }, 2000);
        },
      });
    } else {
      // Show login warning notification
      toast.warning('Login credentials are incorrect!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ToastContainer />
      <Text style={styles.heading}>Login Form</Text>
      <View style={styles.form}>
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
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>
        Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('Registration')}>Register here</Text>
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
  registerText: {
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
