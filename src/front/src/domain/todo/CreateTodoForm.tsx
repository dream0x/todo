import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInputField from "@/domain/common/FormInputField";
import { useTodoStore } from "@/domain/todo/todo.store";
import FormLayout from "../common/FormLayout";

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

export default function CreateTodoForm() {
	const create = useTodoStore((state) => state.createTodo);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: { name: "", description: "" },
	});

	const onSubmit = (values: FormValues) => {
		create(values);
		reset(values);
	};

	return (
		<FormLayout
			type="create"
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
