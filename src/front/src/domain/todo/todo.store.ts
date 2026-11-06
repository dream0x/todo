import { randomUUID } from "expo-crypto";
import { create } from "zustand";
import type { TodoState } from "@/domain/todo/todo.types";

export const useTodoStore = create<TodoState>()((set) => ({
	todos: [
		{
			id: "1",
			name: "勉強する",
			description: "Springの学習",
			completed: false,
		},
		{
			id: "2",
			name: "運動する",
			description: "筋トレする",
			completed: false,
		},
		{
			id: "3",
			name: "掃除する",
			description: "部屋の掃除",
			completed: true,
		},
	],

	createTodo: ({ name, description }) =>
		set((state) => ({
			todos: [
				...state.todos,
				{
					id: randomUUID(),
					name: name,
					description,
					completed: false,
				},
			],
		})),

	updateTodo: (id, { name, description }) =>
		set((state) => ({
			todos: state.todos.map((t) =>
				t.id === id ? { ...t, name: name, description } : t,
			),
		})),

	toggleTodo: (id) =>
		set((state) => ({
			todos: state.todos.map((t) =>
				t.id === id ? { ...t, completed: !t.completed } : t,
			),
		})),

	deleteTodo: (id) =>
		set((state) => ({
			todos: state.todos.filter((t) => t.id !== id),
		})),
}));
