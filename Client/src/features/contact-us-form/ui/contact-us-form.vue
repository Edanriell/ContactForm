<script lang="ts" setup>
	import { z } from "zod";
	import { useField, useForm } from "vee-validate";
	import { toTypedSchema } from "@vee-validate/zod";

	import { Input } from "@shared/ui/input";
	import { Button } from "@shared/ui/button";

	const contactUsFormSchema = z.object({
		firstName: z.string().min(1, "This field is required"),
		lastName: z.string().min(1, "This field is required"),
		emailAddress: z
			.string()
			.email("Please enter a valid email address")
			.min(1, "This field is required"),
		queryType: z.string().min(1, "Please select a query type"),
		message: z.string().min(1, "This field is required"),
		serviceAgreement: z
			.string()
			.refine((val) => val, "To submit this form, please consent to being contacted")
	});

	const { handleSubmit } = useForm({
		validationSchema: toTypedSchema(contactUsFormSchema),
		initialValues: {
			firstName: "",
			lastName: "",
			emailAddress: "",
			queryType: "",
			message: "",
			serviceAgreement: ""
		}
	});

	const { value: firstName, errorMessage: firstNameError } = useField("firstName");
	const { value: lastName, errorMessage: lastNameError } = useField("lastName");
	const { value: emailAddress, errorMessage: emailAddressError } = useField("emailAddress");
	const { value: queryType, errorMessage: queryTypeError } = useField("queryType");
	const { value: message, errorMessage: messageError } = useField("message");
	const { value: serviceAgreement, errorMessage: serviceAgreementError } =
		useField("serviceAgreement");

	const onContactUsFormSubmit = handleSubmit((values) => {
		console.log("Form submitted with values: ", values);
	});
</script>

<template>
	<form class="contact-us-form" @submit.prevent="onContactUsFormSubmit">
		<h2 class="contact-us-form__title">Contact Us</h2>
		<fieldset class="contact-us-form__fieldset">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				First&Last Name
			</legend>
			<div class="contact-us-form__input-group contact-us-form__input-group--gap--large">
				<Input
					v-model="firstName as string"
					input-id="first-name"
					input-name="first-name"
					input-type="text"
					label-for="first-name"
					label-text="First Name"
				/>
				<span v-if="firstNameError">{{ firstNameError }}</span>

				<Input
					v-model="lastName as string"
					input-id="last-name"
					input-name="last-name"
					input-type="text"
					label-for="last-name"
					label-text="Last Name"
				/>
				<span v-if="lastNameError">{{ lastNameError }}</span>
			</div>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Email Address
			</legend>
			<Input
				v-model="emailAddress as string"
				input-id="email-address"
				input-name="email-address"
				input-type="email"
				label-for="email-address"
				label-text="Email Address"
			/>
			<span v-if="emailAddressError">{{ emailAddressError }}</span>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend
				class="contact-us-form__legend contact-us-form__legend--display--block contact-us-form__legend--space--medium"
			>
				Query Type <span>*</span>
			</legend>
			<div class="contact-us-form__input-group contact-us-form__input-group--gap--normal">
				<Input
					v-model="queryType as string"
					input-id="general-enquiry"
					input-name="query-type"
					input-type="radio"
					label-for="general-enquiry"
					label-text="General Enquiry"
					value="General Enquiry"
				/>
				<Input
					v-model="queryType as string"
					input-id="support-request"
					input-name="query-type"
					input-type="radio"
					label-for="support-request"
					label-text="Support Request"
					value="Support Request"
				/>
				<span v-if="queryTypeError">{{ queryTypeError }}</span>
			</div>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Message Text
			</legend>
			<Input
				v-model="message as string"
				input-id="message"
				input-name="message"
				input-type="textarea"
				label-for="message"
				label-text="Message"
			/>
			<span v-if="messageError">{{ messageError }}</span>
		</fieldset>
		<fieldset class="contact-us-form__fieldset contact-us-form__fieldset--space--medium">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Service Agreement
			</legend>
			<Input
				v-model="serviceAgreement as string"
				input-id="service-agreement"
				input-name="service-agreement"
				input-type="checkbox"
				label-for="service-agreement"
				label-text="I consent to being contacted by the team"
				value="true"
			/>
			<span v-if="serviceAgreementError">{{ serviceAgreementError }}</span>
		</fieldset>
		<Button button-text="Submit" />
	</form>
</template>

<style scoped>
	.contact-us-form {
		border-radius: 16rem;
		padding: 24rem;
		margin: 32rem 16rem;
		background: var(--color-white);
		display: flex;
		flex-direction: column;
		row-gap: 24rem;

		@media (width >= 768px) {
			padding: 40rem;
			margin: 128rem 39rem;
			max-width: 690rem;
			width: 100%;
		}

		@media (width >= 1440px) {
			max-width: 736rem;
		}
	}

	.contact-us-form__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 32rem;
		line-height: 100%;
		letter-spacing: -0.03em;
		color: var(--color-grey-900);
		margin-bottom: 8rem;
	}

	.contact-us-form__fieldset {
		border: none;
		margin: unset;
		padding: unset;
	}

	.contact-us-form__fieldset--space--medium {
		margin: 16rem 0;
	}

	.contact-us-form__legend {
		position: relative;
	}

	.contact-us-form__legend--display--none {
		display: none;
	}

	.contact-us-form__legend--display--block {
		display: block;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-grey-900);

		> span {
			font-family: var(--font-family), sans-serif;
			font-weight: 400;
			font-size: 16rem;
			line-height: 150%;
			color: var(--color-green-600);
		}
	}

	.contact-us-form__legend--space--medium {
		margin-bottom: 16rem;
	}

	.contact-us-form__input-group {
		display: flex;
		flex-direction: column;

		@media (width >= 768px) {
			flex-direction: row;
		}
	}

	.contact-us-form__input-group--gap--large {
		row-gap: 24rem;

		@media (width >= 768px) {
			column-gap: 16rem;
		}
	}

	.contact-us-form__input-group--gap--normal {
		row-gap: 16rem;

		@media (width >= 768px) {
			column-gap: 16rem;
		}
	}
</style>
