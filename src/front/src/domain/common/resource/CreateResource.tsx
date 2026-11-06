import { Plus } from "lucide-react-native";
import { Button, Text } from "tamagui";
import ResourceFormDialog from "./ResourceFormDialog";

export default function CreateResource(props: { createForm: any }) {
	return (
		<ResourceFormDialog
			triggerContents={<Button icon={<Plus />}>作成</Button>}
			contents={props.createForm}
		/>
	);
}
