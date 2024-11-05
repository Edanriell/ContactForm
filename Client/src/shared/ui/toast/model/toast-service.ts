import { ref } from "vue";

type Toast = {
	id: number;
	type: "success" | "error" | "warning" | "info";
	message: string;
	duration: number;
};

export const toasts = ref<Toast[]>([]);

export const addToast = (
	message: string,
	type: "success" | "error" | "warning" | "info",
	duration = 3000
) => {
	const id = Date.now();
	toasts.value.push({ id, type, message, duration });

	setTimeout(() => {
		removeToast(id);
	}, duration + 500);
};

export const removeToast = (id: number) => {
	toasts.value = toasts.value.filter((toast) => toast.id !== id);
};
