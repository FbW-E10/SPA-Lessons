import './App.css';
import Header from './components/Header';
import AddProduct from './components/AddProduct'
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import About from './components/About';
import Contacts from './components/Contacts';
import Banner from './components/Banner';

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <AddProduct />
      <About/>
      <Contacts/>
    </div>
  );
}

export default App;
