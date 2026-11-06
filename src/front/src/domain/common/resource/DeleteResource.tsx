import { Trash } from "lucide-react-native";
import { Button, YStack } from "tamagui";
import { useDialogStore } from "../dialog.store";
import ResourceFormDialog from "./ResourceFormDialog";
import type { ResourceType } from "./resource.type";

export default function DeleteResource<T extends ResourceType>(props: {
	resource: T;
	deleteResource: (id: string) => void;
}) {
	return (
		<ResourceFormDialog
			triggerContents={<Button icon={<Trash />} />}
			contents={<DeleteResourceContents {...props} />}
		/>
	);
}

function DeleteResourceContents<T extends ResourceType>(props: {
	resource: T;
	deleteResource: (id: string) => void;
}) {
	const closeDialog = useDialogStore((state) => state.closeTop);

	return (
		<YStack gap="$2.5">
			<Button
				theme="inverse"
				onPress={() => {
					props.deleteResource(props.resource.id);
					closeDialog();
				}}
			>
				{`${props.resource.name}を削除しますか？`}
			</Button>

			<Button onPress={closeDialog}>キャンセル</Button>
		</YStack>
	);
}
