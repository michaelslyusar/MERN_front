import './styles/App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
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
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/register' element={<RegisterScreen />} />
          <Route exact path='/login' element={<LoginScreen />} />
        </Routes>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
