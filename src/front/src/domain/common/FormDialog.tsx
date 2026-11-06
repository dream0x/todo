import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import { Platform } from "react-native";
import { Button, Dialog, YStack } from "tamagui";

export default function FormDialog(props: {
	children: (close: () => void) => JSX.Element;
	triggerText?: string;
	triggerIcon?: JSX.Element;
}) {
	const isMobile = Platform.OS !== "web";
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<Button icon={props.triggerIcon}>{props.triggerText}</Button>
			</Dialog.Trigger>
			<Dialog.FocusScope loop trapped focusOnIdle={true}>
				<Dialog.Portal>
					<Dialog.Overlay background="background" opacity="0.5" />
					<Dialog.Content width={isMobile ? "75%" : undefined}>
						<YStack>
							{/* コンテンツ */}
							{props.children(() => setOpen(false))}
						</YStack>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.FocusScope>
		</Dialog>
	);
}
