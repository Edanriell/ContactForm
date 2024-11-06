<script lang="ts" setup>
	import { defineEmits, onMounted, ref } from "vue";

	type ToastProps = {
		type?: "success" | "error" | "warning" | "info";
		duration?: number;
		closeButton?: boolean;
	};

	const { type = "success", duration = 3000, closeButton = false } = defineProps<ToastProps>();

	const emit = defineEmits(["close"]);
	const isVisible = ref<boolean>(true);

	onMounted(() => {
		if (duration) {
			setTimeout(() => {
				isVisible.value = false;
				emit("close");
			}, duration);
		}
	});

	const closeToast = () => {
		isVisible.value = false;
		emit("close");
	};
</script>

<template>
	<Transition>
		<div v-if="isVisible" :class="['toast', 'toast--type--' + type]">
			<button v-if="closeButton" class="toast__button" @click.stop="closeToast">
				<svg
					class="toast__icon"
					height="25"
					viewBox="0 0 512 512"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM180.7 180.7c-6.2 6.2-6.2 16.4 0 22.6L233.4 256l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0z"
						fill="currentColor"
					/>
				</svg>
			</button>
			<header class="toast__header">
				<svg
					v-if="type === 'success'"
					class="toast__icon"
					height="25"
					viewBox="0 0 24 25"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.2806 9.71937C16.3504 9.78903 16.4057 9.87175 16.4434 9.96279C16.4812 10.0538 16.5006 10.1514 16.5006 10.25C16.5006 10.3486 16.4812 10.4462 16.4434 10.5372C16.4057 10.6283 16.3504 10.711 16.2806 10.7806L11.0306 16.0306C10.961 16.1004 10.8783 16.1557 10.7872 16.1934C10.6962 16.2312 10.5986 16.2506 10.5 16.2506C10.4014 16.2506 10.3038 16.2312 10.2128 16.1934C10.1218 16.1557 10.039 16.1004 9.96938 16.0306L7.71938 13.7806C7.57865 13.6399 7.49959 13.449 7.49959 13.25C7.49959 13.051 7.57865 12.8601 7.71938 12.7194C7.86011 12.5786 8.05098 12.4996 8.25 12.4996C8.44903 12.4996 8.6399 12.5786 8.78063 12.7194L10.5 14.4397L15.2194 9.71937C15.289 9.64964 15.3718 9.59432 15.4628 9.55658C15.5538 9.51884 15.6514 9.49941 15.75 9.49941C15.8486 9.49941 15.9462 9.51884 16.0372 9.55658C16.1283 9.59432 16.211 9.64964 16.2806 9.71937ZM21.75 12.5C21.75 14.4284 21.1782 16.3134 20.1068 17.9168C19.0355 19.5202 17.5127 20.7699 15.7312 21.5078C13.9496 22.2458 11.9892 22.4389 10.0979 22.0627C8.20656 21.6865 6.46928 20.7579 5.10571 19.3943C3.74215 18.0307 2.81355 16.2934 2.43735 14.4021C2.06114 12.5108 2.25422 10.5504 2.99218 8.76884C3.73013 6.98726 4.97982 5.46451 6.58319 4.39317C8.18657 3.32183 10.0716 2.75 12 2.75C14.585 2.75273 17.0634 3.78084 18.8913 5.60872C20.7192 7.43661 21.7473 9.91498 21.75 12.5ZM20.25 12.5C20.25 10.8683 19.7661 9.27325 18.8596 7.91655C17.9531 6.55984 16.6646 5.50242 15.1571 4.87799C13.6497 4.25357 11.9909 4.09019 10.3905 4.40852C8.79017 4.72685 7.32016 5.51259 6.16637 6.66637C5.01259 7.82015 4.22685 9.29016 3.90853 10.8905C3.5902 12.4908 3.75358 14.1496 4.378 15.6571C5.00242 17.1646 6.05984 18.4531 7.41655 19.3596C8.77326 20.2661 10.3683 20.75 12 20.75C14.1873 20.7475 16.2843 19.8775 17.8309 18.3309C19.3775 16.7843 20.2475 14.6873 20.25 12.5Z"
						fill="currentColor"
					/>
				</svg>
				<svg
					v-else-if="type === 'error'"
					class="toast__icon"
					height="25"
					viewBox="0 0 512 512"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
						fill="currentColor"
					/>
				</svg>
				<svg
					v-else-if="type === 'warning'"
					class="toast__icon"
					height="25"
					viewBox="0 0 512 512"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
						fill="currentColor"
					/>
				</svg>
				<svg
					v-else-if="type === 'info'"
					class="toast__icon"
					height="25"
					viewBox="0 0 512 512"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-112c0-8.8-7.2-16-16-16l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 0 96-32 0zm48-168a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
						fill="currentColor"
					/>
				</svg>
				<slot name="title"></slot>
			</header>
			<slot name="text"></slot>
		</div>
	</Transition>
</template>

<style scoped>
	.toast {
		position: relative;
		border-radius: 12rem;
		padding: 24rem;
		display: flex;
		flex-direction: column;
		row-gap: 8rem;
		width: 100%;
		max-width: 327rem;
		margin: 0 24rem;

		@media (width >= 768px) {
			max-width: 450rem;
		}
	}

	.toast__header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		column-gap: 8rem;
	}

	.toast--type--success {
		background-color: #2a4144;
	}

	.toast--type--error {
		background-color: #442a34;
	}

	.toast--type--warning {
		background-color: #443a2a;
	}

	.toast--type--info {
		background-color: #2a3444;
	}

	.toast__button {
		width: 24rem;
		height: 25rem;
		color: #ffffff;
		cursor: pointer;
		position: absolute;
		top: 24rem;
		right: 24rem;
	}

	.toast__icon {
		color: #ffffff;
		width: 24rem;
		height: 25rem;
	}
</style>
