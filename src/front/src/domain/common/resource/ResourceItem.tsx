import type { JSX } from "react/jsx-runtime";
import { Button, YStack } from "tamagui";
import DeleteResource from "./DeleteResource";
import ResourceFormDialog from "./ResourceFormDialog";
import type { ResourceType } from "./resource.type";
import UpdateResource from "./UpdateResource";

export default function ResourceItem<T extends ResourceType>(props: {
	resource: T;
	updateForm: JSX.Element;
	deleteResource: (id: string) => void;
}) {
	return (
		<ResourceFormDialog
			triggerContents={<Button>{props.resource.name}</Button>}
			contents={
				<YStack>
					<DeleteResource
						resource={props.resource}
						deleteResource={props.deleteResource}
					/>
					<UpdateResource updateForm={props.updateForm} />
				</YStack>
			}
		/>
	);
}
