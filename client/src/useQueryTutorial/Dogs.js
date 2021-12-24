import { useQuery } from '@apollo/client';
import { GET_DOGS } from "../queries.js";

export default function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);
  console.log('Dogs DATA: ', data);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
		<>
			<select name='dog' onChange={onDogSelected}>
				<option key={'default'} value={''}>
					{'--- Select A Breed Here ---'}
				</option>
				{data.dogs.map((dog) => (
					<option key={dog.id} value={dog.breed}>
						{dog.breed}
					</option>
				))}
			</select>
		</>
	);
}
