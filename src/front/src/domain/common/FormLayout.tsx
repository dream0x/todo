import type { ReactNode } from "react";
import type {
	FieldValues,
	SubmitHandler,
	UseFormHandleSubmit,
} from "react-hook-form";
import { Button, YStack } from "tamagui";

const submitTextMap = { create: "作成", update: "更新", delete: "削除" };

export default function FormLayout<T extends FieldValues>(props: {
	children: ReactNode;
	type: "create" | "update" | "delete";
	handleSubmit: UseFormHandleSubmit<T>;
	onSubmit: SubmitHandler<T>;
	isSubmitting: boolean;
	closeDialog: () => void;
}) {
	const submitText = submitTextMap[props.type];

	return (
		<YStack gap="$2.5">
			{/* フォーム入力欄 */}
			{props.children}

			{/* 送信ボタン */}
			<Button
				theme="inverse"
				onPress={() => void props.handleSubmit(props.onSubmit)()}
				disabled={props.isSubmitting}
			>
				{submitText}
			</Button>

			{/* キャンセルボタン */}
			<Button onPress={props.closeDialog}>キャンセル</Button>
		</YStack>
	);
}
