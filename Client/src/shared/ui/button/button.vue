<script lang="ts" setup>
	import gsap from "gsap";

	type ButtonProps = {
		isDataLoading?: boolean;
	};

	const { isDataLoading = false } = defineProps<ButtonProps>();

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

	const displayContent = async (element: Element, done: () => void) => {
		gsap.set(element, {
			opacity: 0,
			y: -20
		});

		gsap.to(element, {
			opacity: 1,
			y: 0,
			duration: 0.2,
			ease: "power2.inOut",
			onComplete: () => {
				done();
			}
		});
	};

	const hideContent = (element: Element, done: () => void) => {
		gsap.to(element, {
			opacity: 0,
			y: 20,
			duration: 0.2,
			ease: "power2.inOut",
			onComplete: () => {
				done();
			}
		});
	};
</script>

<template>
	<button
		class="button"
		type="submit"
		@mousedown="handleButtonMouseDown($event.target)"
		@mouseenter="handleButtonMouseEnter($event.target)"
		@mouseleave="handleButtonMouseLeave($event.target)"
		@mouseup="handleButtonMouseUp($event.target)"
	>
		<Transition
			:css="false"
			@enter="(el, done) => displayContent(el, done)"
			@leave="(el, done) => hideContent(el, done)"
		>
			<slot v-if="!isDataLoading" name="content"></slot>
			<slot v-else-if="isDataLoading" name="loader"></slot>
		</Transition>
	</button>
</template>

<style scoped>
	.button {
		position: relative;
		border-radius: 8rem;
		background: var(--color-green-600);
		width: 100%;
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 150%;
		color: var(--color-white);
		cursor: pointer;
		overflow: hidden;
		height: 59rem;
	}
</style>
