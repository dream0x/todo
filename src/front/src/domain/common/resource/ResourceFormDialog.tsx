import type { JSX } from "react";
import { useState } from "react";
import { Platform } from "react-native";
import { Dialog } from "tamagui";
import { CloseDialogContext } from "../CloseDialogContext";

export default function ResourceFormDialog(props: {
	triggerContents: JSX.Element;
	contents: JSX.Element;
}) {
	const isMobile = Platform.OS !== "web";
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>{props.triggerContents}</Dialog.Trigger>
			<Dialog.FocusScope loop trapped focusOnIdle={true}>
				<Dialog.Portal>
					<Dialog.Overlay background="background" opacity="0.5" />
					<Dialog.Content width={isMobile ? "75%" : undefined}>
						<CloseDialogContext.Provider value={() => setOpen(false)}>
							{props.contents}
						</CloseDialogContext.Provider>
					</Dialog.Content>
					<Dialog.Close />
				</Dialog.Portal>
			</Dialog.FocusScope>
		</Dialog>
	);
}
