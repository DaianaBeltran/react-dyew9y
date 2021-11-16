import React from 'react';
import './style.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';


export default function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="hola a todos"/>
      
    
      <p>te ayudamos a darle un toque atractivo a tus eventos</p>
    </div>
  );
}