import type { JSX } from "react";
import { useEffect, useId } from "react";
import { Platform } from "react-native";
import { Dialog } from "tamagui";
import { useDialogStore } from "../dialog.store";

export default function ResourceFormDialog(props: {
	triggerContents: JSX.Element;
	contents: JSX.Element;
}) {
	const isMobile = Platform.OS !== "web";
	const id = useId();
	const isOpen = useDialogStore((state) => state.stack.includes(id));
	const isTop = useDialogStore((state) => state.stack.at(-1) === id);
	const openDialog = useDialogStore((state) => state.open);
	const closeDialog = useDialogStore((state) => state.close);

	useEffect(() => () => closeDialog(id), [closeDialog, id]);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => (open ? openDialog(id) : closeDialog(id))}
		>
			<Dialog.Trigger asChild>{props.triggerContents}</Dialog.Trigger>
			<Dialog.FocusScope loop trapped focusOnIdle={true}>
				<Dialog.Portal>
					{isTop && <Dialog.Overlay background="background" opacity="0.5" />}
					<Dialog.Content width={isMobile ? "75%" : undefined}>
						{props.contents}
					</Dialog.Content>
					<Dialog.Close />
				</Dialog.Portal>
			</Dialog.FocusScope>
		</Dialog>
	);
}
