import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Input, Text, YStack } from "tamagui";

type FormInputFieldProps<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	label: string;
	placeholder?: string;
	error?: string;
};

export default function FormInputField<T extends FieldValues>(
	props: FormInputFieldProps<T>,
) {
	return (
		<Controller
			control={props.control}
			name={props.name}
			render={({ field: { onChange, onBlur, value } }) => (
				<YStack gap="$1">
					<Text>{props.label}</Text>
					<Input
						placeholder={props.placeholder}
						value={value as string}
						onChangeText={onChange}
						onBlur={onBlur}
					/>
					{props.error && <Text color="red">{props.error}</Text>}
				</YStack>
			)}
		/>
	);
}
