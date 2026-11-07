import { Circle, CircleChevronDown } from "lucide-react-native";
import { Button, Text, XStack, YStack } from "tamagui";
import CreateResource from "@/domain/common/resource/CreateResource";
import ResourceItem from "../common/resource/ResourceItem";
import CreateTodoForm from "./CreateTodoForm";
import { useTodoStore } from "./todo.store";
import type { Todo } from "./todo.types";
import UpdateTodoForm from "./UpdateTodoForm";

export default function TodoList() {
	const { todos, deleteTodo, toggleTodo } = useTodoStore((state) => state);
	const incompleteTodos = todos.filter((todo) => !todo.completed);
	const completedTodos = todos.filter((todo) => todo.completed);

	return (
		<YStack gap="$10">
			<CreateResource createForm={<CreateTodoForm />} />

			<YStack>
				<Text>未完了</Text>
				{incompleteTodos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</YStack>

			<YStack>
				<Text>完了</Text>
				{completedTodos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</YStack>
		</YStack>
	);
}

function TodoItem(props: {
	todo: Todo;
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
}) {
	return (
		<XStack key={props.todo.id}>
			<Button onPress={() => props.toggleTodo(props.todo.id)}>
				{props.todo.completed ? <CircleChevronDown /> : <Circle />}
			</Button>
			<ResourceItem
				key={props.todo.id}
				resource={props.todo}
				updateForm={<UpdateTodoForm resource={props.todo} />}
				deleteResource={props.deleteTodo}
			/>
		</XStack>
	);
}
