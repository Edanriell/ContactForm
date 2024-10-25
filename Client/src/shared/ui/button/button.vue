<script lang="ts" setup>
	type ButtonProps = {
		buttonText: string;
	};

	const { buttonText } = defineProps<ButtonProps>();
</script>

<template>
	<button class="button" type="submit">{{ buttonText }}</button>
</template>

<style scoped>
	.button {
		border-radius: 8rem;
		padding: 16rem 0;
		background: var(--color-green-600);
		width: 100%;
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 150%;
		color: var(--color-white);
		cursor: pointer;
	}
</style>
