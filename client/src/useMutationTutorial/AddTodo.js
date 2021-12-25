import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../mutations.js';
import { GET_TODOS } from '../queries.js';

export default function AddTodo() {
	let input;

	// Refetches two queries after mutation completes
	const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
		refetchQueries: [GET_TODOS]
	});

	if (loading) return 'Submitting...';
	if (error) return `Submission error! ${error.message}`;

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

