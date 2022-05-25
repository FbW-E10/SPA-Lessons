import './App.scss';
import Header from './components/Header';
import User from './components/User';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Header/>
      <User/>
    </div>
  );
}

export default App;
