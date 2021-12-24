import { useState } from 'react';
import Dogs from './Dogs.js';
import DogPhoto from './DogPhoto.js';
import DelayedQuery from './DelayedQuery.js'

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
			<br /><br />
			<DelayedQuery />
		</div>
	);
}
