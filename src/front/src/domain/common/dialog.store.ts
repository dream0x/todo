import { create } from "zustand";

type DialogState = {
	stack: string[];
	open: (id: string) => void;
	close: (id: string) => void;
	closeTop: () => void;
};

export const useDialogStore = create<DialogState>()((set) => ({
	stack: [],

	open: (id) =>
		set((state) => ({ stack: [...state.stack.filter((x) => x !== id), id] })),

	close: (id) =>
		set((state) => ({ stack: state.stack.filter((x) => x !== id) })),

	closeTop: () => set((state) => ({ stack: state.stack.slice(0, -1) })),
}));
