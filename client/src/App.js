import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Details from './components/Details/Details';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites"
import { useState } from 'react';
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
//const API_KEY = '922770247f16.3c07fc0f704a23a0b0c1'

// const email = 'thomas@gmail.com'
// const password = '123asd'
const URL = 'http://localhost:3001/rickandmorty/login'

function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState ([])
   const [acces, setAccess] = useState(false)

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   };

   const onClose = (id) => {
      const charactersfiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersfiltered)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />
         }

         <Routes>
            <route path = '/' element = {<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose = {onClose} /> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/details/:id' element ={<Details/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>

      </div>
   );
}

export default App;
