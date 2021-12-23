import { useQuery } from '@apollo/client';
import { GET_DOG_PHOTO } from '../queries.js'

export default function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <>
      <div>Breed: {breed}</div>
      <img src={data.dog.displayImage} style={{ height: 200, width: 200 }} alt={`A ${breed} dog`}/>
    </>
  );
}
