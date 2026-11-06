export type Todo = {
	id: string;
	name: string;
	description: string;
	completed: boolean;
};

export type TodoState = {
	todos: Todo[];
	createTodo: (input: { name: string; description: string }) => void;
	updateTodo: (
		id: string,
		input: { name: string; description: string },
	) => void;
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
};
