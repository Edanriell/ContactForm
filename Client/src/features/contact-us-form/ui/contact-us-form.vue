<script lang="ts" setup>
	import { Input } from "@shared/ui/input";
	import { Button } from "@shared/ui/button";
</script>

<template>
	<form class="contact-us-form">
		<h2 class="contact-us-form__title">Contact Us</h2>
		<fieldset class="contact-us-form__fieldset">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				First&Last Name
			</legend>
			<div class="contact-us-form__input-group contact-us-form__input-group--gap--large">
				<Input
					input-id="first-name"
					input-name="first-name"
					input-type="text"
					label-for="first-name"
					label-text="First Name"
				/>
				<Input
					input-id="last-name"
					input-name="last-name"
					input-type="text"
					label-for="last-name"
					label-text="Last Name"
				/>
			</div>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Email Address
			</legend>
			<Input
				input-id="email-address"
				input-name="email-address"
				input-type="email"
				label-for="email-address"
				label-text="Email Address"
			/>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend
				class="contact-us-form__legend contact-us-form__legend--display--block contact-us-form__legend--space--medium"
			>
				Query Type <span>*</span>
			</legend>
			<div class="contact-us-form__input-group contact-us-form__input-group--gap--normal">
				<Input
					input-id="general-enquiry"
					input-name="query-type"
					input-type="radio"
					label-for="query-type"
					label-text="General Enquiry"
				/>
				<Input
					input-id="support-request"
					input-name="query-type"
					input-type="radio"
					label-for="query-type"
					label-text="Support Request"
				/>
			</div>
		</fieldset>
		<fieldset class="contact-us-form__fieldset">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Message Text
			</legend>
			<Input
				input-id="message"
				input-name="message"
				input-type="textarea"
				label-for="message"
				label-text="Message"
			/>
		</fieldset>
		<fieldset class="contact-us-form__fieldset contact-us-form__fieldset--space--medium">
			<legend class="contact-us-form__legend contact-us-form__legend--display--none">
				Service Agreement
			</legend>
			<Input
				input-id="service-agreement"
				input-name="service-agreement"
				input-type="checkbox"
				label-for="service-agreement"
				label-text="I consent to being contacted by the team"
			/>
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
	}

	.contact-us-form__input-group--gap--large {
		row-gap: 24rem;
	}

	.contact-us-form__input-group--gap--normal {
		row-gap: 16rem;
	}
</style>
