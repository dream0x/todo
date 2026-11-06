import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInputField from "@/domain/common/FormInputField";
import { useTodoStore } from "@/domain/todo/todo.store";
import FormLayout from "../common/FormLayout";
import type { Todo } from "./todo.types";

const formSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, "タイトルを入力してください")
		.max(50, "タイトルは50文字以内で入力してください"),
	description: z
		.string()
		.trim()
		.max(200, "説明は200文字以内で入力してください"),
});

type FormValues = z.infer<typeof formSchema>;

export default function UpdateTodoForm(props: { resource: Todo }) {
	const update = useTodoStore((state) => state.updateTodo);

	const onSubmit = (values: FormValues) => {
		update(props.resource.id, values);
		reset(values);
	};

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: props.resource,
	});

	return (
		<FormLayout
			type="update"
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			isSubmitting={isSubmitting}
		>
			<FormInputField
				control={control}
				name="name"
				label="タイトル"
				placeholder="タイトルを入力"
				error={errors.name?.message}
			/>

			<FormInputField
				control={control}
				name="description"
				label="説明"
				placeholder="説明を入力"
				error={errors.description?.message}
			/>
		</FormLayout>
	);
}
