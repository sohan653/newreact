import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Menubar/Menubar';
import Test from './Test/Test';
import Allproduct from './Allproduct/Allproduct';
import { useState } from 'react';
import Fakedata from './Fakedata/Fakedata';



function App() {
  const [count,setcount]=useState(0)
  const addCart=()=>{
    setcount(count+1)
  }
 
  return (
    <div className="App">
     <Menubar count={count}></Menubar>
     <Allproduct cart={addCart}></Allproduct>
     <Fakedata></Fakedata>

    </div>
  );
}

export default App;
