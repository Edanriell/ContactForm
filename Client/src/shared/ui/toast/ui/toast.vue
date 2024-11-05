<script lang="ts" setup>
	import { defineEmits, onMounted, ref } from "vue";

	const props = defineProps({
		type: String,
		duration: {
			type: Number,
			default: 3000
		}
	});

	const emit = defineEmits(["close"]);
	const isVisible = ref(true);

	onMounted(() => {
		if (props.duration) {
			setTimeout(() => {
				isVisible.value = false;
				emit("close");
			}, props.duration);
		}
	});

	function closeToast() {
		isVisible.value = false;
		emit("close");
		console.log("close");
	}
</script>

<template>
	<transition name="fade">
		<div v-if="isVisible" :class="['toast', type]" @click.self="closeToast">
			<button class="close-btn" @click.stop="closeToast">CLOSE CLOSE</button>
			<slot></slot>
		</div>
	</transition>
</template>

<style scoped>
	.toast {
		position: relative;
		margin-bottom: 10px;
		padding: 1rem;
		border-radius: 5px;
		color: #fff;
		transition: all 0.3s ease;
		cursor: pointer;
		display: flex;
		flex-direction: column;
	}

	.success {
		background-color: #28a745;
	}

	.error {
		background-color: #dc3545;
	}

	.warning {
		background-color: #ffc107;
	}

	.info {
		background-color: #17a2b8;
	}

	.close-btn {
		background: none;
		border: none;
		color: #fff;
		font-size: 12rem;
		top: 5px;
		right: 10px;
		cursor: pointer;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
