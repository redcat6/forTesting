import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import 'materialize-css';

function App() {
  const { token, userId, login, logout, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    <Loader />
  }

  return (
    <AuthContext.Provider value={
      { token, userId, login, logout, isAuthenticated }
    }>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} />
        <div className="container">
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
