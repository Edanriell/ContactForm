import { ref } from "vue";

type Toast = {
	id: number;
	type: "success" | "error" | "warning" | "info";
	title: string;
	message: string;
	duration: number;
	closeButton: boolean;
};

type AddToastParams = {
	message: string;
	title: string;
	type?: "success" | "error" | "warning" | "info";
	duration?: number;
	closeButton?: boolean;
};

export const toasts = ref<Toast[]>([]);

export const addToast = ({
	message,
	title,
	type = "success",
	duration = 3000,
	closeButton = false
}: AddToastParams) => {
	const id = Date.now();
	toasts.value.push({ id, type, title, message, duration, closeButton });

	setTimeout(() => {
		removeToast(id);
	}, duration + 500);
};

export const removeToast = (id: number) => {
	toasts.value = toasts.value.filter((toast) => toast.id !== id);
};
