import { Trash } from "lucide-react-native";
import { Button, YStack } from "tamagui";
import { useTodoStore } from "@/domain/todo/todo.store";
import FormDialog from "../common/FormDialog";
import type { Todo } from "./todo.types";

export default function DeleteTodoForm(props: { resource: Todo }) {
	const deleteTodo = useTodoStore((state) => state.deleteTodo);

	return (
		<FormDialog triggerIcon={<Trash />}>
			{(closeDialog) => {
				return (
					<YStack gap="$2.5">
						{/* 送信ボタン */}
						<Button
							theme="inverse"
							onPress={() => deleteTodo(props.resource.id)}
						>
							{`${props.resource.name}を削除しますか？`}
						</Button>

						{/* キャンセルボタン */}
						<Button onPress={closeDialog}>キャンセル</Button>
					</YStack>
				);
			}}
		</FormDialog>
	);
}
