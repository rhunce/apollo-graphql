import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../queries.js';

export default function Todos() {
	const { loading, error, data } = useQuery(GET_TODOS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :{error}</p>;

	return data.todos.map(({ id, type }) => {
		let input;

		return (
			<div key={id}>
				<p>{type}</p>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (!input.value.trim()) {
							return;
						}

						input.value = '';
					}}
				>
					<input
						ref={(node) => {
							input = node;
						}}
					/>
					<button type='submit'>Update Todo</button>
				</form>
			</div>
		);
	});
}
