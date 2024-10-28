<script lang="ts" setup>
	import { useField, useForm } from "vee-validate";
	import { toTypedSchema } from "@vee-validate/zod";

	import { Input } from "@shared/ui/input";
	import { Button } from "@shared/ui/button";

	import { contactUsFormValidationSchema } from "../model";

	const { handleSubmit } = useForm({
		validationSchema: toTypedSchema(contactUsFormValidationSchema),
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
				<div class="contact-us-form__input-wrapper contact-us-form__input-wrapper--type--column">
					<Input
						v-model="firstName as string"
						:is-valid="!firstNameError"
						input-id="first-name"
						input-name="first-name"
						input-type="text"
						label-for="first-name"
						label-text="First Name"
					/>
					<p v-if="firstNameError" class="contact-us-form__input-validation-error">
						{{ firstNameError }}
					</p>
				</div>
				<div class="contact-us-form__input-wrapper contact-us-form__input-wrapper--type--column">
					<Input
						v-model="lastName as string"
						:is-valid="!lastNameError"
						input-id="last-name"
						input-name="last-name"
						input-type="text"
						label-for="last-name"
						label-text="Last Name"
					/>
					<p v-if="lastNameError" class="contact-us-form__input-validation-error">
						{{ lastNameError }}
					</p>
				</div>
			</div>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Email Address
			</legend>
			<div class="contact-us-form__input-wrapper contact-us-form__input-wrapper--type--column">
				<Input
					v-model="emailAddress as string"
					:is-valid="!emailAddressError"
					input-id="email-address"
					input-name="email-address"
					input-type="email"
					label-for="email-address"
					label-text="Email Address"
				/>
				<p v-if="emailAddressError" class="contact-us-form__input-validation-error">
					{{ emailAddressError }}
				</p>
			</div>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend
				class="contact-us-form__legend contact-us-form__legend--display--block contact-us-form__legend--space--medium"
			>
				Query Type <span>*</span>
			</legend>
			<div class="contact-us-form__input-radio-group contact-us-form__input-group--gap--normal">
				<div class="contact-us-form__input-wrapper contact-us-form__input-wrapper--type--row">
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
				</div>
				<p v-if="queryTypeError" class="contact-us-form__input-validation-error">
					{{ queryTypeError }}
				</p>
			</div>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Message Text
			</legend>
			<div class="contact-us-form__input-wrapper contact-us-form__input-wrapper--type--column">
				<Input
					v-model="message as string"
					:is-valid="!messageError"
					input-id="message"
					input-name="message"
					input-type="textarea"
					label-for="message"
					label-text="Message"
				/>
				<p v-if="messageError" class="contact-us-form__input-validation-error">
					{{ messageError }}
				</p>
			</div>
		</fieldset>
		<fieldset class="contact-us-form__fieldset contact-us-form__fieldset--space--medium">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Service Agreement
			</legend>
			<div class="contact-us-form__input-wrapper contact-us-form__input-wrapper--type--column">
				<Input
					v-model="serviceAgreement as string"
					input-id="service-agreement"
					input-name="service-agreement"
					input-type="checkbox"
					label-for="service-agreement"
					label-text="I consent to being contacted by the team"
					value="true"
				/>
				<p v-if="serviceAgreementError" class="contact-us-form__input-validation-error">
					{{ serviceAgreementError }}
				</p>
			</div>
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

	.contact-us-form__input-radio-group {
		display: flex;
		flex-direction: column;
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

	.contact-us-form__input-wrapper {
		display: flex;
		width: 100%;
	}

	.contact-us-form__input-wrapper--type--column {
		flex-direction: column;
		row-gap: 8rem;
	}

	.contact-us-form__input-wrapper--type--row {
		flex-direction: column;
		row-gap: 16rem;

		@media (width >= 768px) {
			flex-direction: row;
			column-gap: 16rem;
		}
	}

	.contact-us-form__input-validation-error {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-red);
	}
</style>
