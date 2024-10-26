<script lang="ts" setup>
	import { MainLayout } from "@widgets/layouts/main/ui";

	import { ContactUsForm } from "@features/contact-us-form/ui";
</script>

<template>
	<MainLayout>
		<h1 class="visually-hidden">Contact Us</h1>
		<section class="home-page">
			<ContactUsForm />
		</section>
	</MainLayout>
</template>

<style scoped>
	.home-page {
		@media (width >= 768px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>
