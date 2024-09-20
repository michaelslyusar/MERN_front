import './styles/App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/register' element={<RegisterScreen />} />
          <Route exact path='/login' element={<LoginScreen />} />
          {/* Private Routes */}
          <Route path='' element={<PrivateRoute />}>
            <Route exact path='/profile' element={<ProfileScreen />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
