import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Details from './components/Details/Details';
import Form from './components/Form/Form';
import { useState } from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '922770247f16.3c07fc0f704a23a0b0c1'

function App() {
   const [characters, setCharacters] = useState ([])

   const onSearch = (id) => {
   axios(`${URL_BASE}/${id}?key=${API_KEY}`)
   .then (response => response.data)
   .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
}

   const onClose = (id) => {
      const charactersfiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersfiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>

         <Routes>
            <route path = '/' element = {<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose = {onClose}/> }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/details/:id' element ={<Details/>}/>
         </Routes>

      </div>
   );
}

export default App;
