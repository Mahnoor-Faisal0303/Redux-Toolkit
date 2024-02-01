// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import LoginScreen from './LoginScreen';
// import Home from './Home';
// import SignupScreen from './SignupScreen';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <Provider store={store}>
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginScreen />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/Signup" element={<SignupScreen />} />
//       </Routes>
//     </Router>
//   </Provider>
// );

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App/>
  </Provider>
);

