import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import {Fragment} from 'react'

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Landing/>
    </Fragment>
    
  );
}

export default App;
