<script lang="ts" setup>
	type InputProps = {
		labelText: string;
		labelFor: string;
		inputName: string;
		inputId: string;
		inputType: "text" | "email";
	};

	const { labelText, labelFor, inputName, inputId, inputType = "text" } = defineProps<InputProps>();
</script>

<template>
	<div v-if="inputType === 'text'" class="text-input__field">
		<label :for="labelFor" class="text-input__label">{{ labelText }} <span>*</span></label>
		<input :id="inputId" :name="inputName" class="text-input" type="text" />
	</div>
	<div v-else-if="inputType === 'email'" class="email-input__field">
		<label :for="labelFor" class="email-input__label">{{ labelText }} <span>*</span></label>
		<input :id="inputId" :name="inputName" class="email-input" type="email" />
	</div>
</template>

<style scoped>
	.text-input__field {
		display: flex;
		flex-direction: column;
		row-gap: 8rem;
	}

	.text-input__label {
		display: flex;
		flex-direction: row;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-grey-900);
		column-gap: 8rem;

		> span {
			font-family: var(--font-family), sans-serif;
			font-weight: 400;
			font-size: 16rem;
			line-height: 150%;
			color: var(--color-green-600);
		}
	}

	.text-input {
		border: 1rem solid var(--color-grey-500);
		border-radius: 8rem;
		padding: 12rem 24rem;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 18rem;
		line-height: 150%;
		color: var(--color-grey-900);
	}

	.email-input__label {
		display: flex;
		flex-direction: row;
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-grey-900);
		column-gap: 8rem;

		> span {
			font-family: var(--font-family), sans-serif;
			font-weight: 400;
			font-size: 16rem;
			line-height: 150%;
			color: var(--color-green-600);
		}
	}

	.email-input {
		border: 1rem solid var(--color-grey-500);
		border-radius: 8rem;
		padding: 12rem 24rem;
	}
</style>
