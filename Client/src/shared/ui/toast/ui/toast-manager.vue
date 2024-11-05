<script lang="ts" setup>
	import Toast from "./toast.vue";

	import { toasts } from "../model";

	function removeToast(id: number) {
		toasts.value = toasts.value.filter((toast) => toast.id !== id);
	}
</script>

<template>
	<div class="toast-container">
		<Toast
			v-for="(toast, index) in toasts"
			:key="toast.id"
			:duration="toast.duration"
			:type="toast.type"
			@close="removeToast(toast.id)"
		>
			{{ toast.message }}
		</Toast>
	</div>
</template>

<style scoped>
	.toast-container {
		position: fixed;
		bottom: 20px;
		right: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		z-index: 1000;
	}
</style>
