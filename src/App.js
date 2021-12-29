import './App.css';
import Normalize from 'react-normalize';
import Card from './components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRandom} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Backcard from './components/Backcard';

function App() {

  const [ pokemon, setPokemon ] = useState({});
  const [ random, setRandom ] = useState(Math.floor((Math.random() * 150 )+ 1));
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${random}/`)
      .then(res => setPokemon(res.data));
    setLoading(false);
    }, [random]);
    
  const pokeRandom = () => {
    setRandom(Math.floor((Math.random() * 150 )+ 1));
  }

  return (
    <div className="App" >
      <Normalize />
      {
        loading ? (
          <div className='loader' ></div>
        ) : (
          <>
            <label htmlFor="checkbox" >
              <input type="checkbox" id="checkbox" />
              <div className="carta-box">
                <div className="carta">    
                  <div className="cara">
                    <Card pokemon={pokemon} />
                    <button onClick={pokeRandom}><FontAwesomeIcon icon={faRandom} /></button>
                  </div>
                  <div className="cara detras">
                    <Backcard pokemon={pokemon} />
                    <button onClick={pokeRandom}><FontAwesomeIcon icon={faRandom} /></button>
                  </div>    
                </div>
              </div>
            </label>
          </>
        )
      }
    </div>
  );
}

export default App;