import { Trash } from "lucide-react-native";
import { Button, YStack } from "tamagui";
import { useTodoStore } from "@/domain/todo/todo.store";
import FormDialog from "../common/FormDialog";

export default function DeleteTodoForm(props: { resourceId: string }) {
	const deleteTodo = useTodoStore((state) => state.deleteTodo);

	return (
		<FormDialog triggerIcon={<Trash />}>
			{(closeDialog) => {
				return (
					<YStack gap="$2.5">
						{/* 送信ボタン */}
						<Button
							theme="inverse"
							onPress={() => deleteTodo(props.resourceId)}
						>
							"削除しますか？"
						</Button>

						{/* キャンセルボタン */}
						<Button onPress={closeDialog}>キャンセル</Button>
					</YStack>
				);
			}}
		</FormDialog>
	);
}
