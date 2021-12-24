export default function AddTodo() {
	let input;

	return (
		<div>
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
				<button type='submit'>Add Todo</button>
			</form>
		</div>
	);
}