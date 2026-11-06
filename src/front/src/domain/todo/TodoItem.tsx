import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { XStack, YStack } from "tamagui";
import { z } from "zod";
import FormInputField from "@/domain/common/FormInputField";
import { useTodoStore } from "@/domain/todo/todo.store";
import FormDialog from "../common/FormDialog";
import FormLayout from "../common/FormLayout";
import DeleteTodoForm from "./DeleteTodoForm";
import type { Todo } from "./todo.types";
import UpdateTodoForm from "./UpdateTodoForm";

export default function TodoItem(props: { resource: Todo }) {
	const update = useTodoStore((state) => state.deleteTodo);

	return (
		<FormDialog triggerText={props.resource.title}>
			{(closeDialog) => {
				return (
					<YStack>
						<DeleteTodoForm resourceId={props.resource.id} />
						<UpdateTodoForm
							resource={props.resource}
							closeDialog={closeDialog}
						/>
					</YStack>
				);
			}}
		</FormDialog>
	);
}
