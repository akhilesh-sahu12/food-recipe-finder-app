import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter as Router, Route, Link } from 'react-router-native';
import Header from './components/Home/Header';
import Sidebar from './components/Home/Sidebar';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import { AuthProvider } from './context/AuthContext';
import AuthGuard from './guards/AuthGuard';
import UserDashboard from './components/Dashboard/UserDashboard';
import { UserProvider } from './context/UserContext';
import Contact from './components/Contact';
import RecipeSearch from './components/Search/RecipeSearch';
import RecipeDetails from './components/Search/RecipeDetails';

export default function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <View style={styles.container}>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <View style={styles.content}>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Registration} />
              <Route path="/login" component={Login} />
              <AuthGuard>
                <Route path='/recipes-search' component={RecipeSearch} />
                <Route path='/recipe/:recipeId' component={RecipeDetails} />
                <Route path='/dashboard' component={UserDashboard} />
              </AuthGuard>
              <Route path='/contact' component={Contact} />
              <Route path='*' component={PageNotFound} />
            </View>
          </View>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});
