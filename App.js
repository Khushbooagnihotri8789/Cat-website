import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';

import Home from './Webpages/Home';
import Contact from './Webpages/Contact';
import About from './Webpages/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
              </Routes> 
              <Footer/>
          </Router>  

    </div>
  );
}

export default App;
