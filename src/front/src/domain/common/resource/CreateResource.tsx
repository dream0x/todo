import { Plus } from "lucide-react-native";
import type { JSX } from "react/jsx-runtime";
import { Button } from "tamagui";
import ResourceFormDialog from "./ResourceFormDialog";

export default function CreateResource(props: { createForm: JSX.Element }) {
	return (
		<ResourceFormDialog
			triggerContents={<Button icon={<Plus />}>作成</Button>}
			contents={props.createForm}
		/>
	);
}
