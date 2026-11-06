import type { ReactNode } from "react";
import type {
	FieldValues,
	SubmitHandler,
	UseFormHandleSubmit,
} from "react-hook-form";
import { Button, YStack } from "tamagui";
import { useDialogStore } from "@/domain/common/dialog.store";

const submitTextMap = { create: "作成", update: "更新", delete: "削除" };

export default function FormLayout<T extends FieldValues>(props: {
	children: ReactNode;
	type: "create" | "update" | "delete";
	handleSubmit: UseFormHandleSubmit<T>;
	onSubmit: SubmitHandler<T>;
	isSubmitting: boolean;
}) {
	const submitText = submitTextMap[props.type];
	const closeDialog = useDialogStore((state) => state.closeTop);

	return (
		<YStack gap="$2.5">
			{/* フォーム入力欄 */}
			{props.children}

			{/* 送信ボタン */}
			<Button
				theme="inverse"
				onPress={() =>
					void props.handleSubmit(async (values) => {
						await props.onSubmit(values);
						closeDialog();
					})()
				}
				disabled={props.isSubmitting}
			>
				{submitText}
			</Button>

			{/* キャンセルボタン */}
			<Button onPress={closeDialog}>キャンセル</Button>
		</YStack>
	);
}
