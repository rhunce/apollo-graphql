import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../mutations.js';

export default function AddTodo() {
	let input;

	const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
    variables: {
      type: "placeholder",
      // someOtherVariable: 1234,
    }
  });

  if (loading) return 'Submitting...';
	if (error) return `Submission error! ${error.message}`;

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    addTodo({ variables: { type: input.value.trim() } });
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

