import { useState } from 'react';
import Dogs from './Dogs.js';
import DogPhoto from './DogPhoto.js';

export default function App() {
  const [selectedDog, setSelectedDog] = useState("pitbull");

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <div>
      <h2>Building Query Components 🚀</h2>
      <DogPhoto breed={selectedDog} />
      <br />
      <Dogs onDogSelected={onDogSelected} />
    </div>
  );
}
