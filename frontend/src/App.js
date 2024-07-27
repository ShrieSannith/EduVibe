
import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/home/welcome';
import Categories from './components/home/categories';
import Mentor from './components/home/mentor'
import Subscribe from './components/home/subscribe';
import Footer from './components/footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faDribbble, faLinkedin);

function App() {
  return (
    <div className="App">
        <Navbar />
       <Welcome />
      {/* <Categories /> */}
      <Mentor />
      {/* <Subscribe /> */}
      <Footer/>
    </div>
  );
}

export default App;
