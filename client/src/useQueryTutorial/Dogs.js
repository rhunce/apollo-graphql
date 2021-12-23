import { useQuery } from '@apollo/client';
import { GET_DOGS } from "../queries.js";
import { useState } from 'react';

export default function Dogs() {
  const [selectedDog, setSelectedDog] = useState(null);

  const { loading, error, data } = useQuery(GET_DOGS);
  console.log('DATA: ', data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <>
      <div>{selectedDog}</div>
      <select name='dog' onChange={onDogSelected}>
        {data.dogs.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    </>
  );
}
