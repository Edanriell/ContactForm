<script lang="ts" setup>
	import { MainLayout } from "@widgets/layouts/main/ui";

	import { ContactUsForm } from "@features/contact-us-form/ui";
</script>

<template>
	<MainLayout>
		<h1 class="visually-hidden">Contact Us</h1>
		<section>
			<ContactUsForm />
		</section>
	</MainLayout>
</template>

<style scoped></style>
