import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Signup" element={<SignupScreen />} />
      </Routes>
    </Router>
  );
  }
  export default App;

