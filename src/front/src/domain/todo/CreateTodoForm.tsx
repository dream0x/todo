import { zodResolver } from "@hookform/resolvers/zod";
import type { JSX } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInputField from "@/domain/common/FormInputField";
import { useTodoStore } from "@/domain/todo/todo.store";
import FormDialog from "../common/FormDialog";
import FormLayout from "../common/FormLayout";

const formSchema = z.object({
	title: z
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

export default function CreateTodoForm(props: { icon?: JSX.Element }) {
	const create = useTodoStore((state) => state.createTodo);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {},
	});

	return (
		<FormDialog triggerText="作成" triggerIcon={props.icon}>
			{(closeDialog) => {
				const onSubmit = (values: FormValues) => {
					create(values);
					reset(values);
					closeDialog();
				};

				return (
					<FormLayout
						type="create"
						handleSubmit={handleSubmit}
						onSubmit={onSubmit}
						isSubmitting={isSubmitting}
						closeDialog={closeDialog}
					>
						<FormInputField
							control={control}
							name="title"
							label="タイトル"
							placeholder="タイトルを入力"
							error={errors.title?.message}
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
			}}
		</FormDialog>
	);
}
