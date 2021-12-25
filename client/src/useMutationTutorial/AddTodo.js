import { gql, useMutation } from '@apollo/client';
import { ADD_TODO } from '../mutations.js';
import { GET_TODOS } from '../queries.js';

export default function AddTodo() {
	let input;

	const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
		refetchQueries: [GET_TODOS], // If certain ToDo fields won't get updated automatically, use the update function instead to manually do so as shown below. Should also use onQueryUpdated with it to "double check" your update function's modifications by refetching affected active queries. Even more powerful, use all three.
		update(cache, { data: { addTodo } }) {
			cache.modify({
				fields: {
					todos(existingTodos = []) {
						const newTodoRef = cache.writeFragment({
							data: addTodo,
							fragment: gql`
								fragment NewTodo on Todo {
									id
									type
								}
							`,
						});
						return [...existingTodos, newTodoRef];
					},
				},
			});
		},
		onQueryUpdated(observableQuery) {
			// Define any custom logic for determining whether to refetch
			if (shouldRefetchQuery(observableQuery)) {
				return observableQuery.refetch();
			}
		},
	});

  const shouldRefetchQuery = (observableQuery) => {
    console.log('observableQuery: ', observableQuery);
    return true;
  };

	const handleFormSubmission = (e) => {
		e.preventDefault();
		if (!input.value.trim()) {
			return;
		}
		addTodo({
			variables: { type: input.value.trim() },
			refetchQueries: [GET_TODOS]
		});
		input.value = '';
	};

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

	return (
		<div>
			<form onSubmit={handleFormSubmission}>
				<input
					ref={(node) => {
						input = node;
					}}
				/>
				<button type='submit'>Add Todo</button>
			</form>
		</div>
	);
}

