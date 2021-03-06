import React from 'react';
import './App.css';
import DogListContainer from './components/DogListContainer';
import { Route } from 'react-router-dom'
import DogBreedImages from './components/DogBreedImages';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={DogListContainer} />
        <Route exact path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </main>
    </div>
  );
}

export default App;
