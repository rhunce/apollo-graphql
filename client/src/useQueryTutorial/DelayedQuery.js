import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DOG_PHOTO } from "../queries.js"

export default function DelayedQuery() {
  const [getDog, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  console.log('DelayedQuery DATA: ', data);

  return (
		<div>
			<div>LAZY QUERY EXAMPLE</div>
			{data?.dog && (
				<img
					src={data.dog.displayImage}
					style={{ height: 200, width: 200 }}
					alt='A happy dog'
				/>
			)}
			<button onClick={() => getDog({ variables: { breed: 'bulldog' } })}>
				Click me!
			</button>
		</div>
	);
}