<script lang="ts" setup>
	type LoaderProps = {
		color?: string;
		width?: string;
	};

	const { color = "#fff", width = "30rem" } = defineProps<LoaderProps>();
</script>

<template>
	<div :style="{ color: color, width: width }" class="loader"></div>
</template>

<style scoped>
	.loader {
		aspect-ratio: 1;
		border-radius: 50%;
		background:
			radial-gradient(farthest-side, currentColor 94%, #0000) top/5.5rem 5.5rem no-repeat,
			conic-gradient(#0000 30%, currentColor);
		-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 5.5rem), #000 0);
		animation: spinnerAnimation 0.75s infinite linear;
	}

	@keyframes spinnerAnimation {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
