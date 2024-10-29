<script lang="ts" setup>
	import { ref } from "vue";
	import gsap from "gsap";

	type ButtonProps = {
		buttonText: string;
	};

	const { buttonText } = defineProps<ButtonProps>();

	const buttonRef = ref<HTMLButtonElement>();

	const handleButtonMouseEnter = (element: EventTarget | null) => {
		gsap.to(element, { scale: 1.05, duration: 0.2, ease: "power2.out" });
	};

	const handleButtonMouseLeave = (element: EventTarget | null) => {
		gsap.to(element, {
			backgroundColor: "hsl(169,82%,27%)",
			scale: 1,
			duration: 0.15,
			ease: "power2.out"
		});
	};

	const handleButtonMouseDown = (element: EventTarget | null) => {
		gsap.to(element, {
			backgroundColor: "hsl(169,82%,13.5%)",
			scale: 0.95,
			duration: 0.2,
			ease: "power2.inOut"
		});
	};

	const handleButtonMouseUp = (element: EventTarget | null) => {
		gsap.to(element, {
			backgroundColor: "hsl(169,82%,27%)",
			scale: 1.05,
			duration: 0.15,
			ease: "power2.inOut"
		});
	};
</script>

<template>
	<button
		ref="buttonRef"
		class="button"
		type="submit"
		@mousedown="handleButtonMouseDown($event.target)"
		@mouseenter="handleButtonMouseEnter($event.target)"
		@mouseleave="handleButtonMouseLeave($event.target)"
		@mouseup="handleButtonMouseUp($event.target)"
	>
		{{ buttonText }}
	</button>
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
