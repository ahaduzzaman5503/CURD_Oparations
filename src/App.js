import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import { UserProvider } from './Components/UserContext/UserContext';
import Delete from './Components/Delete/Delete';
import Read from './Components/Read/Read';
import Create from './Components/Create/Create';
import Edit from './Components/Edit/Edit';


function App() {
  return (
    <div>
      <UserProvider>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/delete/:id' element={<Delete></Delete>}></Route>
        <Route path='/read/:id' element={<Read></Read>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
