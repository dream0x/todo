import type { JSX } from "react/jsx-runtime";
import { YStack } from "tamagui";
import CreateResource from "./CreateResource";
import ResourceItem from "./ResourceItem";
import type { ResourceType } from "./resource.type";

export default function ResourceList<T extends ResourceType>(props: {
	resources: T[];
	createForm: JSX.Element;
	updateForm: (resource: T) => JSX.Element;
	deleteResource: (id: string) => void;
}) {
	return (
		<YStack>
			<CreateResource createForm={props.createForm} />
			{props.resources.map((resource) => (
				<ResourceItem
					key={resource.id}
					resource={resource}
					updateForm={props.updateForm(resource)}
					deleteResource={props.deleteResource}
				/>
			))}
		</YStack>
	);
}
