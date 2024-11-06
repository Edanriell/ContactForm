<script lang="ts" setup>
	import Toast from "./toast.vue";

	import { toasts } from "../model";

	const removeToast = (id: number) => {
		toasts.value = toasts.value.filter((toast) => toast.id !== id);
	};
</script>

<template>
	<div class="toast__container">
		<Toast
			v-for="{ id, closeButton, duration, type, title, message } in toasts"
			:key="id"
			:close-button="closeButton"
			:duration="duration"
			:type="type"
			@close="removeToast(id)"
		>
			<template v-slot:title>
				<p class="toast__title">{{ title }}</p>
			</template>
			<template v-slot:text>
				<p class="toast__text">{{ message }}</p>
			</template>
		</Toast>
	</div>
</template>

<style scoped>
	.toast__container {
		position: fixed;
		top: 24rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		gap: 10rem;
		z-index: 1000;
	}

	.toast__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-green-200);
		text-align: left;
	}

	.toast__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 150%;
		color: var(--color-white);
		text-align: left;
	}
</style>
