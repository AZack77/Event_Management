import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/participate';
import Create from './components/create';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import EventUpdate from './components/updateDetails';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <Create></Create> */}
      {/* <BasicExample></BasicExample> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/participate' element={<BasicExample></BasicExample>}/>
        <Route path='/update' element={<EventUpdate></EventUpdate>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
