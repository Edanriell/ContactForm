<script lang="ts" setup>
	import gsap from "gsap";

	type LinkProps = {
		linkText: string;
		linkHref: string;
	};

	const { linkText, linkHref } = defineProps<LinkProps>();

	const handleLinkMouseEnter = (element: EventTarget | null) => {
		gsap.to(element, { scale: 1.05, duration: 0.2, ease: "power2.out" });
	};

	const handleLinkMouseLeave = (element: EventTarget | null) => {
		gsap.to(element, {
			backgroundColor: "hsl(169,82%,27%)",
			scale: 1,
			duration: 0.15,
			ease: "power2.out"
		});
	};

	const handleLinkMouseDown = (element: EventTarget | null) => {
		gsap.to(element, {
			backgroundColor: "hsl(169,82%,13.5%)",
			scale: 0.95,
			duration: 0.2,
			ease: "power2.inOut"
		});
	};

	const handleLinkMouseUp = (element: EventTarget | null) => {
		gsap.to(element, {
			backgroundColor: "hsl(169,82%,27%)",
			scale: 1.05,
			duration: 0.15,
			ease: "power2.inOut"
		});
	};
</script>

<template>
	<a
		:href="linkHref"
		class="link"
		target="_self"
		@mousedown="handleLinkMouseDown($event.target)"
		@mouseenter="handleLinkMouseEnter($event.target)"
		@mouseleave="handleLinkMouseLeave($event.target)"
		@mouseup="handleLinkMouseUp($event.target)"
	>
		{{ linkText }}
	</a>
</template>

<style scoped>
	.link {
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
