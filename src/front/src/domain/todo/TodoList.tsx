import { Circle, CircleChevronDown, Plus } from "lucide-react-native";
import { Button, Text, XStack, YStack } from "tamagui";
import UpdateTodoForm from "@/domain/todo/TodoItem";
import TodoItem from "@/domain/todo/TodoItem";
import { useTodoStore } from "@/domain/todo/todo.store";
import type { Todo } from "@/domain/todo/todo.types";
import CreateTodoForm from "./CreateTodoForm";

export default function TodoList() {
	const { todos, toggleTodo } = useTodoStore((state) => state);
	const incompleteTodos = todos.filter((todo) => !todo.completed);
	const completedTodos = todos.filter((todo) => todo.completed);

	return (
		<YStack gap="$10">
			<CreateTodoForm icon={<Plus />} />

			<YStack>
				<Text>未完了</Text>
				{incompleteTodos.map((todo) => (
					<TodoItemWrap key={todo.id} todo={todo} toggleTodo={toggleTodo} />
				))}
			</YStack>

			<YStack>
				<Text>完了</Text>
				{completedTodos.map((todo) => (
					<TodoItemWrap key={todo.id} todo={todo} toggleTodo={toggleTodo} />
				))}
			</YStack>
		</YStack>
	);
}

function TodoItemWrap(props: { todo: Todo; toggleTodo: (id: string) => void }) {
	return (
		<XStack key={props.todo.id}>
			<Button onPress={() => props.toggleTodo(props.todo.id)}>
				{props.todo.completed ? <CircleChevronDown /> : <Circle />}
			</Button>
			<TodoItem resource={props.todo} />
		</XStack>
	);
}
