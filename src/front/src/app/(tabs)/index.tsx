import ResourceList from "@/domain/common/resource/ResourceList";
import CreateTodoForm from "@/domain/todo/CreateTodoForm";
import { useTodoStore } from "@/domain/todo/todo.store";
import UpdateTodoForm from "@/domain/todo/UpdateTodoForm";

export default function Home() {
	const { todos, deleteTodo } = useTodoStore((state) => state);
	return (
		<ResourceList
			resources={todos}
			createForm={<CreateTodoForm />}
			updateForm={(todo) => <UpdateTodoForm resource={todo} />}
			deleteResource={deleteTodo}
		/>
	);
}
